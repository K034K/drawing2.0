import React, { useState } from "react";
import Square from "./Square.jsx";
//create a grid of squares based on width and height
const CreateGrid = (props) => {
    const { width, activeColor, grid, setGrid } = props;
    //console.log(grid);
    const [isDragging, setIsDragging] = useState(false);
    const handleMouseDown = (e) => {
        if (e.button === 0) {
            setIsDragging(true);
        }
    };

    const handleMouseUp = (e) => {
        setIsDragging(false);
    };  

    const updateGrid = (id, value) => {
        const newGrid = [...grid]; // Create a new array with the same values as the original grid
        newGrid[id] = value; // Update the value at the specified index
        setGrid(newGrid); // Set the new grid array
    };

    const gridStyle = {
        gridTemplateColumns: `repeat(${width}, 1fr)`,
    };

    return (
        <div className="grid" style={gridStyle} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            {grid.map((square, i) => (
                <Square
                    key={i}
                    id={i}
                    activeColor={activeColor}
                    isDragging={isDragging}
                    square={square}
                    updateGrid={updateGrid}
                />
            ))}
        </div>
    );
};

export default CreateGrid;
