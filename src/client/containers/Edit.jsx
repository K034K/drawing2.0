import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { delEditUser, setEditUser } from "../store/reducers/app";

import { adminGetUser } from "../lib/api";
import { Button } from "@mui/material";
import CreateGrid from "../components/CreateGrid";
import ColorPicker from "../components/ColorPicker";

export default function Edit(props) {
    const params = useParams();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.app.editUser);

    const [activeColor, setActiveColor] = useState("red");
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [colorPickerPosition, setColorPickerPosition] = useState({ x: 0, y: 0 });

    const navigate = useNavigate();

    console.log("params: ", params);

    console.log(user);

    useEffect(() => {
        load();

        return () => {
            dispatch(delEditUser());
        };
    }, [params.username]);

    function load() {
        return adminGetUser(params.username).then((res) => {
            if (!res.ok) {
                console.warn("Error", res);
                return;
            }
            dispatch(setEditUser(res.user));
        });
    }

    function navigateHome() {
        props.navigate("/");
    }

    function navigateAdmin() {
        props.navigate("/admin");
    }

    function saveUser() {
        console.log("saveUser");
    }

    window.addEventListener("click", (e) => {
        if (e.target.className === "colorPicker window") {
            setShowColorPicker(true);
        } else {
            setShowColorPicker(false);
        }
    });

    window.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        setShowColorPicker(!showColorPicker);
        setColorPickerPosition({ x: e.clientX, y: e.clientY });
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            setShowColorPicker(false);
        }
    });

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
                <ColorPicker
                    colors={colors}
                    setActiveColor={setActiveColor}
                    showColorPicker={showColorPicker}
                    colorPickerPosition={colorPickerPosition}
                />
                <CreateGrid width={user.width} activeColor={activeColor} grid={grid} setGrid={user.grid} />
            </main>
        </div>
    );
}
