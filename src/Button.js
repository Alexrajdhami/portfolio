import React from "react";
import PropTypes from "prop-types";
import "./Calculator.css";

const Button = (props) => {
    return (
        <button
            className="ButtonStyle"
            value={props.label}
            onClick={props.ClickHandle}
            aria-label={props.label}
            title={props.label}
        >
            {props.label}
        </button>
    );
};

// Add prop validation
Button.propTypes = {
    label: PropTypes.string.isRequired, // Button label must be a string
    ClickHandle: PropTypes.func.isRequired, // Click handler must be a function
};

export default Button;
