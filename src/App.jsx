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

import React, { useState } from "react";

const ColorPicker = ({ colors, setActiveColor, showColorPicker, colorPickerPosition }) => {
    return (
        <div
            className="colorPicker window"
            style={{
                left: colorPickerPosition.x - 45,
                top: colorPickerPosition.y - 45,
                visibility: showColorPicker ? "visible" : "hidden",
            }}
        >
            {colors.map((color) => (
                <div
                    key={color}
                    className="color"
                    style={{
                        backgroundColor: color,
                    }}
                    onClick={() => setActiveColor(color)}
                ></div>
            ))}
        </div>
    );
};

const Square = ({ width, height, id, activeColor, isDragging }) => {
    //add event listener to the square where if the mouse is down and the mouse is moving change the color of the square
    const handleMouseMove = (e) => {
        if (isDragging) {
            changeColor(id, activeColor);
        }
    };
    return (
        <div
            key={id.toString()}
            id={id.toString()}
            className="square"
            onClick={() => changeColor(id, activeColor)}
            style={{
                backgroundColor: "darkgrey",
                width: `${100 / width}vw`,
                height: `${100 / height}vh`,
            }}
            onMouseMove={handleMouseMove}
        ></div>
    );
};

//create a grid of squares based on width and height
const CreateGrid = ({ width, height, activeColor }) => {
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
        grid.push(
            <Square
                key={i.toString()}
                id={i.toString()}
                width={width}
                height={height}
                activeColor={activeColor}
                isDragging={isDragging}
            />
        );
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

const changeColor = (id, activeColor) => {
    const square = document.getElementById(id.toString());
    square.style.backgroundColor = activeColor;
};

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

    addEventListener("contextmenu", (e) => {
        e.preventDefault();
        setShowColorPicker(!showColorPicker);
        setColorPickerPosition({ x: e.clientX, y: e.clientY });
    });
    addEventListener("click", (e) => {
        if (showColorPicker) {
            setShowColorPicker(false);
        }
    });
    addEventListener("keydown", (e) => {
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
                    <ColorPicker
                        colors={colors}
                        setActiveColor={setActiveColor}
                        showColorPicker={showColorPicker}
                        colorPickerPosition={colorPickerPosition}
                    />
                    <CreateGrid width={width} height={height} activeColor={activeColor} />
                </div>
            )}
        </div>
    );
}

//it's a form component that will have width and height inputs
//and a submit button and reset button
//when the form is submitted, it will create a grid of squares
// width and height are number of squres horizontally and vertically
// reset button will make inputs standart values that are 10 and 10
// on submit form will disappear and grid will appear
//show error if width or height is less than 1 and more than 100 and if it's not a number

//create a form

const Form = ({ setWidth, setHeight, setShowForm }) => {
    const [localWidth, setLocalWidth] = useState(10);
    const [localHeight, setLocalHeight] = useState(10);
    const handleSubmit = (e) => {
        e.preventDefault();
        setWidth(document.getElementById("width").value);
        setHeight(document.getElementById("height").value);
        setShowForm(false);
    };

    const handleReset = (e) => {
        e.preventDefault();
        setLocalWidth(10);
        setLocalHeight(10);
        document.getElementById("width").value = 10;
        document.getElementById("height").value = 10;
        document.getElementById("submit").disabled = false;
    };

    const checkInput = (e) => {
        //if input is not a number or less than 1 or more than 100
        // disable submit button
        //must be an integer
        //use setCustomValidity

        if (e.target.value < 1 || e.target.value > 100) {
            e.target.setCustomValidity("Please enter a number between 1 and 100");
            e.target.reportValidity();
            document.getElementById("submit").disabled = true;
        } else if (e.target.value % 1 !== 0) {
            e.target.setCustomValidity("Please enter an integer");
            e.target.reportValidity();
            document.getElementById("submit").disabled = true;
        } else if (isNaN(e.target.value)) {
            e.target.setCustomValidity("Please enter a number");
            e.target.reportValidity();
            document.getElementById("submit").disabled = true;
        } else {
            e.target.setCustomValidity("");
            e.target.reportValidity();
            document.getElementById("submit").disabled = false;
        }
    };

    return (
        <div className="window">
            <div className="title-bar">
                <div className="title-bar-text">Small Drawing Project</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body">
                <form onSubmit={handleSubmit} className="form">
                    <div className="field-row-stacked">
                        <label htmlFor="width">Width</label>
                        <input type="number" name="width" id="width" className="input-number" onChange={checkInput} />
                    </div>
                    <div className="field-row-stacked">
                        <label htmlFor="height">Height</label>
                        <input type="number" name="height" id="height" onChange={checkInput} />
                    </div>
                    <div className="buttonRow">
                        <button type="submit" id="submit" disabled="true">
                            Submit
                        </button>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
