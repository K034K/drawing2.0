import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { delEditUser, setEditUser } from "../store/reducers/app";

import { Button, gridClasses } from "@mui/material";

import { adminGetUser, editSaveUser } from "../lib/api";

import CreateGrid from "../components/CreateGrid";

import ColorPicker from "../components/ColorPicker";

/**
 * Edit component for editing user information
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Rendered component
 */
export default function Edit(props) {
    const params = useParams();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.app.editUser);

    const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white"];

    const [activeColor, setActiveColor] = useState("red");
    const [grid, setGrid] = useState(user.grid || []);

    const navigate = useNavigate();

    console.log("params: ", params);

    console.log(user); 

    useEffect(() => {
        load();

        return () => {
            dispatch(delEditUser());
        };
    }, [params.username]);

    // useEffect(() => {
    //     waitForGrid().then((gridLoca) => {
    //         setGrid(user.grid);
    //     });
    // }, [user]);

    /**
     * Loads user information from the server
     * @returns {Promise<void>} - Promise that resolves when user information is loaded
     */
    function load() {
        return adminGetUser(params.username).then((res) => {
            if (!res.ok) {
                console.warn("Error", res);
                return;
            }
            dispatch(setEditUser(res.user));
            setGrid(res.user.grid)
        }).then(() => {
            ; 
        });
    }

    /**
     * Navigates to the home page
     */
    function navigateHome() {
        navigate("/");
    }

    /**
     * Navigates to the admin page
     */
    function navigateAdmin() {
        navigate("/admin");
    }

    /**
     * Saves user information to the server
     */
    function saveUser() {
        editSaveUser(user.username, grid).then((res) => {
            if (!res.ok) {
                console.warn("Error", res);
                return;
            }
            navigateAdmin();
        });
    }

    function waitForGrid() {
        return new Promise((resolve) => {
            const intervalId = setInterval(() => {
                if (grid && user.width) {
                    clearInterval(intervalId);
                    resolve(gridClasses);
                }
            }, 100);
        });
    }


    return (
        <div>
            <h1>Edit Page</h1>
            <h2>{user.username}</h2>
            <header>
                <Button variant="contained" onClick={navigateHome}>
                    Home
                </Button>
                <Button variant="contained" onClick={navigateAdmin}>
                    Admin
                </Button>
                <Button variant="contained" onClick={saveUser}>
                    Save
                </Button>
            </header>
            <main>
                <ColorPicker colors={colors} setActiveColor={setActiveColor} />
                <CreateGrid width={user.width} activeColor={activeColor} grid={grid} setGrid={setGrid} />;
            </main>
        </div>
    );
}
