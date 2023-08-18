import React from "react";

import Router from "./components/Router.jsx";
import { Provider } from "react-redux";

import getStore from "./store";
import axios from "axios";

export default function App(props) {
    const store = props.store || getStore(window.__PRELOADED_STATE__);

    return (
        <Provider store={store}>
            <Router location={props.location} />
        </Provider>
    );
}
