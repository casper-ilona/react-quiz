import React from 'react';
import classes from './Input.module.css';
import PropTypes from "prop-types";

function isInvalid(props) {
    return !props.valid && props.shouldValidate && props.touched;
}

const Input = props => {
    const inputType = props.type || 'text';
    const cls = [classes.Input];
    const htmlFor = `${inputType}-${Math.random()}`;
    
    if (isInvalid(props)) {
        cls.push(classes.invalid);
    }
    
    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            
            {
                isInvalid(props)
                    ? <span>{props.errorMessage || 'Enter the correct value'}</span>
                    : null
            }
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.node,
    value: PropTypes.node,
    onChange: PropTypes.func,
    errorMessage: PropTypes.string,
    shouldValidate: PropTypes.string,
    touched: PropTypes.string,
    valid: PropTypes.string,
};

export default Input;
