import React, { useState } from "react";
import Square from "./Square.jsx";
//create a grid of squares based on width and height
const CreateGrid = (props) => {
    const { width, height, activeColor } = props;

    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = (e) => {
        if (e.button === 0) {
            setIsDragging(true);
        }
    };

    const handleMouseUp = (e) => {
        setIsDragging(false);
    };

    const grid = [];
    for (let i = 0; i < height * width; i++) {
        grid.push(<Square key={i} id={i} activeColor={activeColor} isDragging={isDragging} />);
    }
    const gridStyle = {
        gridTemplateColumns: `repeat(${width}, 1fr)`,
    };

    return (
        <div className="grid" style={gridStyle} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            {grid.map((square) => square)}
        </div>
    );
};

export default CreateGrid;
