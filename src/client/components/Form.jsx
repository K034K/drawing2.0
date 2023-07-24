import React, { useState } from "react";

//it's a form component that will have width and height inputs
//and a submit button and reset button
//when the form is submitted, it will create a grid of squares
// width and height are number of squres horizontally and vertically
// reset button will make inputs standart values that are 10 and 10
// on submit form will disappear and grid will appear
//show error if width or height is less than 1 and more than 100 and if it's not a number

//create a form
const Form = (props) => {
    const { setWidth, setHeight, setShowForm } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        setWidth(document.getElementById("width").value);
        setHeight(document.getElementById("height").value);
        setShowForm(false);
    };

    const handleReset = (e) => {
        e.preventDefault();
        const widthInput = document.getElementById("width");
        const heightInput = document.getElementById("height");
        //get window width and height and divide by 40 and make it integer

        widthInput.value = Math.round(window.innerWidth / 40);
        heightInput.value = Math.round(window.innerHeight / 40);

        document.getElementById("submit").removeAttribute("disabled");
    };

    const checkInput = (e) => {
        //if input is not a number or less than 1 or more than 100
        // disable submit button
        //must be an integer
        //use setCustomValidity
        const submitButon = document.getElementById("submit");
        if (e.target.value < 1 || e.target.value > 100) {
            e.target.setCustomValidity("Please enter a number between 1 and 100");
            e.target.reportValidity();
            submitButon.setAttribute("disabled");
        } else if (e.target.value % 1 !== 0) {
            e.target.setCustomValidity("Please enter an integer");
            e.target.reportValidity();
            submitButon.setAttribute("disabled");
        } else if (isNaN(e.target.value)) {
            e.target.setCustomValidity("Please enter a number");
            e.target.reportValidity();
            submitButon.setAttribute("disabled");
        } else {
            e.target.setCustomValidity("");
            e.target.reportValidity();
            submitButon.removeAttribute("disabled");
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
                        <button type="submit" id="submit" disabled>
                            Submit
                        </button>

                        <button onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
