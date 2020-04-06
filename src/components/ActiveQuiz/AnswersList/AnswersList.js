import React from 'react';
import classes from './AnswersList.module.css';
import AnswerTtem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
    return (
        <ul className={classes.AnswersList}>
            {props.answers.map((answers, index) => {
                return (
                    <AnswerTtem
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


export default AnswersList;
