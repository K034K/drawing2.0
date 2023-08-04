import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";

import { storeReducer } from "./storeReducer";

import Admin from "../../client/containers/Admin";

const DELETE_USER = "DELETE_USER";

const getUsers = createAsyncThunk('getUsersList', async () => {
    const response = await fetch("/admin/getUsersList");
    const users = await response.json().users;
    return users;
});

const [GET_USERS, dispatchGetUsers] = getUsers.getActions();

export const store = configureStore({
    reducer: storeReducer,
});

const mapStateToProps = (state) => ({
    users: state.users,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getUsers()),
});
  
const adminConnector = connect(mapStateToProps, mapDispatchToProps)(Admin);