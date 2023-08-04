import React from "react";

import Router from "./components/Router.jsx";

export default function App(props) {
    const { location } = props;

    return <Router location={location} />;
}
