import React,{useState} from "react";

const Square = (props) => {
    const {id, activeColor, isDragging} = props;
    const [color, setColor] = useState("black");
    //add event listener to the square where if the mouse is down and the mouse is moving change the color of the square
    const handleMouseMove = (e) => {
        if (isDragging) {
            setColor(activeColor);
        }
    };

    return (
        <div
            id={id}
            className="square"
            style={{
                backgroundColor: color,
            }}
            onMouseMove={handleMouseMove}
        ></div>
    );
};

export default Square;
