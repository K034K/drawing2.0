import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUsers = createAction("app/setUsers");

export const delUser = createAction("app/delUser");

export const appReducer = createReducer(
    {
        users: [],
    },
    (builder) => {
        builder

            .addCase(setUsers, (state, action) => {
                state.users = action.payload;
            })
            .addCase(delUser, (state, action) => {
                state.users = state.users.filter((user) => user.username !== action.payload);
            });
    }
);

//make async function for get users
