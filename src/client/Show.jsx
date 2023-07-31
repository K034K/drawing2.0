import React from "react";

import CreateGrid from "./components/CreateGrid";

//show the grid for the user without the ability to edit it

export default function Show(props) {
    const { width, grid } = props;
    return <CreateGrid width={width} grid={grid} />;
}
