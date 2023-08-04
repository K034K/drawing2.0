import { createReducer } from "@reduxjs/toolkit";

const GET_USERS = "GET_USERS";

const DELETE_USER = "DELETE_USER";

export const storeReducer = createReducer(
    {
        users: [],
    },
    {
        [GET_USERS]: (state, action) => {
            state.users = action.users;
        },
        [DELETE_USER]: (state, action) => {
            state.users = state.users.filter((user) => user.username !== action.username);
        },
    }
);


//make async function for get users
