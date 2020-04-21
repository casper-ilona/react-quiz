import React from "react";
import classes from './ActiveQuiz.module.css';
import AnswersList from "./AnswersList/AnswersList";
import PropTypes from "prop-types";

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.answerNumber}</strong>
                    {props.question}
                </span>
                
                <small>{props.answerNumber} из {props.quizLength}</small>
            </p>
            
            <AnswersList
                state={props.state}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    );
};

ActiveQuiz.propTypes = {
    quizLength: PropTypes.number,
    question: PropTypes.string,
    answerNumber: PropTypes.number,
    state: PropTypes.object,
    answers: PropTypes.array,
    onAnswerClick: PropTypes.func,
};

export default ActiveQuiz;
