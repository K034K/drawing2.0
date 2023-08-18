import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { delEditUser, setEditUser } from "../store/reducers/app";

import { adminGetUser } from "../lib/api";

export default function Edit(props) {
    const params = useParams();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.app.editUser);

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

    return (
        <div>
            <h1>Edit Page</h1>
            <h2>{user.username}</h2>
        </div>
    );
}
