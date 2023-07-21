import React from "react";

const Square = (props) => {
    const {key, id, activeColor, isDragging } = props;

    //add event listener to the square where if the mouse is down and the mouse is moving change the color of the square
    const handleMouseMove = (e) => {
        if (isDragging) {
            changeColor(id, activeColor);
        }
    };

    const changeColor = (id, activeColor) => {
        const square = document.getElementById(id);
        square.style.backgroundColor = activeColor;
    };
    return (
        <div
            key={key}
            id={id}
            className="square"
            onClick={() => changeColor(id, activeColor)}
            style={{
                backgroundColor: "#010b13",
            }}
            onMouseMove={handleMouseMove}
        ></div>
    );
};

export default Square;
