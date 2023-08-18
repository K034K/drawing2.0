import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUsers = createAction("app/setUsers");

export const setEditUser = createAction("app/setEditUser");

export const delEditUser = createAction("app/delEditUser");

export const appReducer = createReducer(
    {
        users: [],
        editUser: {},
    },
    (builder) => {
        builder

            .addCase(setUsers, (state, action) => {
                state.users = action.payload;
            })
            .addCase(setEditUser, (state, action) => {
                state.editUser = action.payload;
            })
            .addCase(delEditUser, (state, action) => {
                state.editUser = {};
            });
    }
);

//make async function for get users
