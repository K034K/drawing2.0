import React, { useState } from "react";

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
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            grid.push(createSquare(width, height));
        }
    }
    return (
        <div className="grid">
            {grid.map((square) => (
                <div
                    className="square"
                    style={{
                        backgroundColor: square.color,
                        width: square.widthSquare,
                        height: square.heightSquare,
                    }}
                    onClick={changeColor()}
                ></div>
            ))}
        </div>
    );
};

//color picker

const createColorPicker = () => {
    
    const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white"];
    
    return
        
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
    </div>
        ;
};

//set active color

const setActiveColor = (color) => {
    return (activeColor = color);
};

//create a square

const createSquare = (width, height) => {
    return {
        color: "darkgrey",
        widthSquare: window.innerWidth / width,
        heightSquare: window.innerHeight / height,
    };
};

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "darkblue",
        };
    }
    render() {
        return (
            <div
                className="square"
                style={{
                    backgroundColor: this.state.color,
                }}
            ></div>
        );
    }

    changeColor() {
        this.setState({
            color: activeColor,
        });

    }

}


const changeColor = () => {
    return (square) => {
        square.color = activeColor;
    };
};

export default function App() {
    return createGrid(10, 10);
}
