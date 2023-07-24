//create grid based;based on width and height of the screen
// grid contains squares that will be filled with colors
// squares will fit the screen
//width is the number of squares in a row
//height is the number of squares in a column
//on click, the square will change color
//on right click show color picker
// on second right or esc click close color picker
//on color picker change, change drawing color
//create a function that will change the color of the square
//create a function that will change the color of the square when clicked

import React, { useState } from "react";

import ColorPicker from "./components/ColorPicker.jsx";
import Form from "./components/Form.jsx";
import CreateGrid from "./components/CreateGrid.jsx";

export default function App(props) {
    const [activeColor, setActiveColor] = useState("red");
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [colorPickerPosition, setColorPickerPosition] = useState({ x: 0, y: 0 });
    const [width, setWidth] = useState(10);
    const [height, setHeight] = useState(10);
    const [showForm, setShowForm] = useState(true);

    const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white"];
    //on riht click show color picker and second hide it you can use esc key
    // you can click anywhere to hide it and show it

    window.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        setShowColorPicker(!showColorPicker);
        setColorPickerPosition({ x: e.clientX, y: e.clientY });
    });

    const colorPicker =<ColorPicker
    colors={colors}
    setActiveColor={setActiveColor}
    showColorPicker={showColorPicker}
    colorPickerPosition={colorPickerPosition}
/>;
    //if you click on the window of colorPicker don't hide it
    window.addEventListener("click", (e) => {
        if (e.target === colorPicker) {
            setShowColorPicker(true);
        } else {
            setShowColorPicker(false);
        }
    });
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            setShowColorPicker(false);
        }
    });

    return (
        <div className="app">
            {showForm ? (
                <Form setWidth={setWidth} setHeight={setHeight} setShowForm={setShowForm} />
            ) : (
                <div className="gridContainer">
                    {colorPicker}
                    <CreateGrid width={width} height={height} activeColor={activeColor} />
                </div>
            )}
        </div>
    );
}
