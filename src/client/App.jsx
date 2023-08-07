import React from "react";

import Router from "./components/Router.jsx";
import { Provider } from "react-redux";

import getStore from "./store";

export default function App(props) {

    const store = props.store || getStore(window.__PRELOADED_STATE__);

    console.log(store.getState());
    return (
        <Provider store={store}>
            <Router location={props.location} />
        </Provider>
    );
}
