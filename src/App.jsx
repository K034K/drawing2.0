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

//me: what is wrong with my code? why is it not working? why is it not rendering? why is it not changing color? why is it n
//copilot: 
import React, { useState } from "react";

const ColorPicker = ({ colors, setActiveColor }) => {
  return (
    <div className="colorPicker">
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

const Square = ({ width, height, id, activeColor }) => {
  return (
    <div
      key={id.toString()}
      id={id.toString()}
      className="square"
      onClick={() => changeColor(id, activeColor)}
      style={{
        backgroundColor: activeColor,
        width: `${100 / width}%`,
        height: `${100 / height}%`,
      }}
    ></div>
  );
};

const createGrid = (width, height) => {
  const grid = [];
  for (let i = 0; i < height + width; i++) {
    grid.push(createSquare(width, height, i));
  }
  return <div className="grid">{grid.map(square)}</div>;
};

const changeColor = (id, activeColor) => {
  const square = document.getElementById(id.toString());
  square.style.backgroundColor = activeColor;
};

const createSquare = (width, height, id) => {
  return (
    <Square
      key={id.toString()}
      id={id.toString()}
      width={width}
      height={height}
    />
  );
};

const App = () => {
  const [activeColor, setActiveColor] = useState("darkCyan");
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "black",
    "white",
  ];

  return (
    <div>
      <ColorPicker colors={colors} setActiveColor={setActiveColor} />
      {createGrid(width, height)}
    </div>
  );
};

export default App;
