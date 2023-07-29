import React, { useState, useEffect } from "react";

const Square = (props) => {
    const { id, activeColor, isDragging, square, updateGrid } = props;
    
    //add event listener to the square where if the mouse is down and the mouse is moving change the color of the square
    const handleMouseDown = () => {
        updateGrid(id,  { ...square, color: activeColor });
    };

    const handleMouseEnter = () => {
        if (isDragging) {
            updateGrid(id, { ...square, color: activeColor });
        }
    };

    return (
        <div
            id={id}
            className="square"
            style={{
                backgroundColor: square.color,
            }}
            onMouseDown={handleMouseDown}
            onMouseEnter={handleMouseEnter}
        ></div>
    );
};

export default Square;
