import './App.css';
import './Calculator.css';
import React, { useState } from "react";
import Button from "./Button.js";

function KeyPadComponent(props) {
    const [text1, setText] = useState(""); // For calculator input
    const [showImage, setShowImage] = useState(false); // For showing the image

    const ClickHandle = (e) => {
        const value = e.target.value;

        if (value === "C") {
            setText(""); // Clear the input
            setShowImage(false); // Hide image on clear
        } else if (value === "=") {
            try {
                setText(eval(text1)); // Evaluate the expression
                alert(eval(text1));
            } catch {
                setText("Error");
            }
        } else if (value === "Show Me") {
            setShowImage(true); // Show the image
        } else if (value === "Square") {
            try {
                const number = parseFloat(text1); // Parse the input as a number
                if (!isNaN(number)) {
                    const squaredValue = number * number; // Calculate the square
                    setText(squaredValue.toString()); // Update the display
                } else {
                    setText("Error"); // Handle invalid input
                }
            } catch {
                setText("Error");
            }
        } else {
            setText(text1 + value); // Append the button value to the input
        }
    };

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>

            {/* Row 1 */}
            <div>
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle} />
                <Button label="C" ClickHandle={ClickHandle} />
            </div>

            {/* Row 2 */}
            <div>
                <Button label="1" ClickHandle={ClickHandle} />
                <Button label="2" ClickHandle={ClickHandle} />
                <Button label="3" ClickHandle={ClickHandle} />
                <Button label="+" ClickHandle={ClickHandle} />
            </div>

            {/* Row 3 */}
            <div>
                <Button label="4" ClickHandle={ClickHandle} />
                <Button label="5" ClickHandle={ClickHandle} />
                <Button label="6" ClickHandle={ClickHandle} />
                <Button label="-" ClickHandle={ClickHandle} />
            </div>

            {/* Row 4 */}
            <div>
                <Button label="7" ClickHandle={ClickHandle} />
                <Button label="8" ClickHandle={ClickHandle} />
                <Button label="9" ClickHandle={ClickHandle} />
                <Button label="*" ClickHandle={ClickHandle} />
            </div>

            {/* Row 5 */}
            <div>
                <Button label="." ClickHandle={ClickHandle} />
                <Button label="0" ClickHandle={ClickHandle} />
                <Button label="=" ClickHandle={ClickHandle} />
                <Button label="/" ClickHandle={ClickHandle} />
            </div>

            {/* Additional Buttons */}
            <div>
                <Button label="Square" ClickHandle={ClickHandle} />
                <Button label="Show Me" ClickHandle={ClickHandle} />
            </div>

            {/* Conditionally render the image */}
            {showImage && (
                <div className="image-container">
                    <img
                        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500" // image url
                        alt="nature"
                        className="displayed-image"
                    />
                </div>
            )}
        </div>
    );
}

export default KeyPadComponent;
