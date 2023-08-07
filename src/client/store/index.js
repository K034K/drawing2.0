import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";

import { appReducer } from "./reducers/app";

let store;

export default function getStore(initialState = {}) {
    if (!store) {
        store = configureStore({
            reducer: { app: appReducer },
            preloadedState: initialState,
        });
    }
    return store;
}
