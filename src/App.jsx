import React, { useState } from "react";
import { useRef } from "react";

//create grid based;based on width and height of the screen
// grid contains squares that will be filled with colors
// squares will fit the screen
//width is the number of squares in a row
//height is the number of squares in a column
//on click, the square will change color

//on right click show color picker
// on second right or esc click close color picker
//on color picker change, change drawing color

//create a grid
//create a square
//create a color
//create a function that will change the color of the square
//create a function that will change the color of the square when clicked

const activeColor = "blue";

const createGrid = (width, height) => {
    const grid = [];
    for (let i = 0; i < height + width; i++) {
        grid.push(createSquare(width, height, i));
    }
    return <div className="grid">{grid.map((square) => square)}</div>;
};

//color picker

const createColorPicker = () => {
    const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white"];

    return;

    <div className="colorPicker">
        {colors.map((color) => (
            <div
                className="color"
                style={{
                    backgroundColor: color,
                }}
                onClick={setActiveColor(color)}
            ></div>
        ))}
    </div>;
};

//set active color

const setActiveColor = (color) => {
    return (activeColor = color);
};

//create a square

const createSquare = (width, height, id) => {
    const dS = (
        <div
            key={id.toString()}
            ref={id.toString()}
            id={id.toString()}
            className="square"
            onClick={e=>changeColor(e, id)}
            style={{
                backgroundColor: "darkCyan",
                width: window.innerWidth / width,
                height: window.innerHeight / height,
            }}
        ></div>
    );
    
    return dS;
};

//change color of square

const changeColor = (e, id) => {
    const square = document.getElementById(id.toString());
    square.style.backgroundColor = activeColor;
};

export default function App() {
    return createGrid(10, 10);
}
