import React from 'react';
import classes from './Button.module.css';
import PropTypes from "prop-types";

const Button = props => {
    const cls = [
        classes.Button,
        classes[props.type]
    ];
    
    return (
        <button
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['error', 'success', 'primary']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
