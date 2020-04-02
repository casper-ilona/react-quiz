import React, { Component } from 'react';
import classes from './Quiz.module.css';
import  ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state={
        quiz: [
            {
             answers: [
                 {text:'Question1'},
                 {text:'Question2'},
                 {text:'Question3'},
                 {text:'Question4'},
             ]
            }
        ]
    };
    
    render() {
        return (
            <div className={classes.Quiz}>
               
                
                
                <div className={classes.QuizWrapper}>
                    <h1>Answer all questions</h1>
                    
                 <ActiveQuiz
                 answers={this.state.quiz[0].answers}
                 />
                </div>
                
            </div>
            
            
        );
    }
}


export default Quiz;
