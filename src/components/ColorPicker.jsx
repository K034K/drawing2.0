import React from "react";

const ColorPicker = (props) => {
    const { colors, setActiveColor, showColorPicker, colorPickerPosition } = props;
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

export default ColorPicker;
