import React, { Component } from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import { createControl } from '../../form/formFramework';
import Input from '../../components/UI/Input/Input'
import Axiliary from '../../hoc/Auxiliary/Auxiliary'

function createOptionControl(number) {
    return createControl({
        label: `Option ${number}`,
        errorMessage: 'Value cannot be empty',
        id: number
    }, {required: true});
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Enter a question',
            errorMessage: 'The question cannot be empty'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    };
}

export class QuizCreator extends Component {
    
    
    state = {
        quiz: [],
        formControls: createFormControls()
    };
    
    
    submitHandler = event => {
        event.preventDefault();
    };
    
    addQuestionHandler = () => {
    
    };
    
    createQuizHandler = () => {
    
    };
    
    changeHandler =(value, controlName)=>{
    
    };
    
    
    renderControls () {
      return Object.keys(this.state.formControls).map((controlName, index) => {
       const control = this.state.formControls[controlName];
         
         return(
           <Axiliary key={controlName + index} >
           <Input
             label={control.label}
             value={control.value}
             valid={control.valid}
             shouldValidate={!!control.validation}
             touched={control.touched}
             errorMessage={control.errorMessage}
             onChange={event=>this.changeHandler(event.target.value, controlName)}
           />
          { index === 0 ? <hr/>: null }
          </Axiliary>
         )
      })
    }
    
    
    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Create test</h1>
                    
                    <form onSubmit={this.submitHandler}>
                      
                        { this.renderControls() }
                        
                        <select></select>
                        
                        <Button
                            type="primary"
                            onClick={this.addQuestionHandler}
                        >
                            Add Question
                        </Button>
                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                        >
                            Create test
                        </Button>
                    </form>
                
                </div>
            
            </div>
        );
    }
}
