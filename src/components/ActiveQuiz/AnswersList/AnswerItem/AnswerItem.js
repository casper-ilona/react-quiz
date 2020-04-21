import React from 'react';
import classes from './AnswerItem.module.css';
import PropTypes from "prop-types";

const AnswerItem = props => {
    const cls = [classes.AnswerItem];
    
    if (props.state) {
        cls.push(classes[props.state]);
    }
    
    return (
        <li
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    );
};

AnswerItem.propTypes = {
    onAnswerClick: PropTypes.func,
    state: PropTypes.oneOf(['success', 'error']),
    answer: PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
    }),
};

export default AnswerItem;
