import React, { Component } from "react";

import send from "../lib/send";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { storeReducer } from "../../server/controllers/storeReducer";

export default function Admin(props) {
    const store = configureStore(storeReducer, window.__PRELOADED_STATE__);

    delete window.__PRELOADED_STATE__;

    const db = store.getState().users;

    return (
        <Provider store={store}>
            <div>
                <h1>Admin Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Widht</th>
                            <th>Height</th>
                            <th>Grid</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {db.map((item) => (
                            <tr key={item.username}>
                                <td>{item.username}</td>
                                <td>{item.width}</td>
                                <td>{item.height}</td>
                                <td>{item.grid}</td>
                                <td>
                                    <button onClick={() => this.deleteUser(item.username)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => this.props.history.push("/")}>Back</button>
            </div>
        </Provider>
    );
}
