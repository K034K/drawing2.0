import React, { Component, useEffect } from "react";


import { adminGetUsersList, adminDeleteUser } from "../lib/api";

import { useSelector, useDispatch } from "react-redux";

import { setUsers } from "../store/reducers/app";


//Rendering the Admin page
export default function Admin(props) {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.app.users);

    React.useEffect(() => {
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

    console.log("users", users);
    return (
        <div>
            <h1>Admin Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Width</th>
                        <th>Height</th>
                        <th>Grid</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item) => (
                        <tr key={item.username}>
                            <td>{item.username}</td>
                            <td>{item.width}</td>
                            <td>{item.height}</td>
                            <td>{item.grid.length}</td>
                            <td>
                                <button onClick={()=>delUser(item.username)}>Delete {item.username}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => this.props.history.push("/")}>Back</button>
            <button onClick={load}>Refresh</button>
        </div>
    );
}
