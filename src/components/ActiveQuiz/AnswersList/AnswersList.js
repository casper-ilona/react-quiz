import React from 'react';
import classes from './AnswersList.module.css';
import AnswerItem from "./AnswerItem/AnswerItem";
import PropTypes from "prop-types";

const AnswersList = props => {
    return (
        <ul className={classes.AnswersList}>
            {props.answers.map((answers, index) => {
                return (
                    <AnswerItem
                        key={index}
                        answer={answers}
                        onAnswerClick={props.onAnswerClick}
                        state={props.state ? props.state[answers.id] : null}
                    />
                );
            })}
        </ul>
    );
};

AnswersList.propTypes = {
    answers: PropTypes.array,
    onAnswerClick: PropTypes.func,
    state: PropTypes.object,
};

export default AnswersList;
