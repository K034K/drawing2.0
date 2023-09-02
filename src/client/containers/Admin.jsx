import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { adminGetUsersList, adminDeleteUser } from "../lib/api";

import { useSelector, useDispatch } from "react-redux";

import { setUsers } from "../store/reducers/app";

import { Table, TableBody, TableCell, TableRow, TableHead, TableContainer, Button, Stack } from "@mui/material";

//Rendering the Admin page
export default function Admin(props) {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.app.users);
    let navigate = useNavigate();

    useEffect(() => {
        load();
    }, []);

    //Loading the users list
    function load() {
        adminGetUsersList().then((res) => {
            if (!res.ok) {
                console.warn("Error", res);
                return;
            }
            dispatch(setUsers(res.users));
        });
    }

    //Deleting the user
    function delUser(username) {
        adminDeleteUser(username).then((res) => {
            if (!res.ok) {
                console.warn("Error", res);
                return;
            }
            load();
        });
    }

    function navigateHome() {
        navigate("/");
    }

    function navigateEdit(username) {
        navigate("/edit/" + username);
    }

    console.log("users", users);
    return (
        <div>
            <h1>Admin Page</h1>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell align="right">Width</TableCell>
                            <TableCell align="right">Height</TableCell>
                            <TableCell align="right">Grid</TableCell>
                            <TableCell align="right">Comment</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((item) => (
                            <TableRow key={item.username}>
                                <TableCell component="th" scope="row">
                                    {item.username}
                                </TableCell>
                                <TableCell align="right">{item.width}</TableCell>
                                <TableCell align="right">{item.height}</TableCell>
                                <TableCell align="right">{item.grid.length}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={()=> writeComment(item.username)}></Button>
                                </TableCell>
                                <TableCell align="right">
                                    {/* on click go to /edit/username */}
                                    <Button onClick={() => navigateEdit(item.username)}>Edit</Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => delUser(item.username)}>Delete {item.username}</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={() => navigateHome()}>
                    Back
                </Button>
                <Button variant="contained" onClick={load}>
                    Refresh
                </Button>
            </Stack>
        </div>
    );
}
