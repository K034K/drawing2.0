import React, {useState, useEffect} from "react";


const ColorPicker = (props) => {

    const [showColorPicker, setShowColorPicker] = useState(false);
    const [colorPickerPosition, setColorPickerPosition] = useState({ x: 0, y: 0 });

    const { colors, setActiveColor,} = props;
    
    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === "Escape") {
            setShowColorPicker(false);
          }
        };
      
        const handleContextMenu = (e) => {
          e.preventDefault();
          setShowColorPicker(!showColorPicker);
          setColorPickerPosition({ x: e.clientX, y: e.clientY });
        };
      
        const handleClick = (e) => {
          if (e.target.className !== "colorPicker window") {
            setShowColorPicker(false);
          }
        };
      
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("contextmenu", handleContextMenu);
        window.addEventListener("click", handleClick);
      
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
          window.removeEventListener("contextmenu", handleContextMenu);
          window.removeEventListener("click", handleClick);
        };
      }, [showColorPicker]);


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
