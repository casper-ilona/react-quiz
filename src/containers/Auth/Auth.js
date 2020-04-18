import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from "../../components/UI/Button/Button";




export default class Auth extends Component {
    
    loginHandler = () => {
    
    };
    
    registerHandler =() => {
    
    };
    
    submitHandler = event => {
       event.preventDefault()
    };
    
    
    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Login</h1>
                    
                    <Button
                        type="success"
                        onClick={this.loginHandler}
                    >
                        Go
                    </Button>
                    
                    <Button
                        type="primary"
                        onClick={this.registerHandler}
                    >
                        Sign up
                    </Button>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <input type="text"/>
                        <input type="text"/>
                    </form>
                </div>
            </div>
        );
    }
}
