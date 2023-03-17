import React from 'react'
import axios from 'axios'

import {HashRouter, BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.obtainAuthToken = props.obtainAuthToken
        this.state = {
            'login' : '',
            'password' : '',


        }
    }

    handleChange(event){
        this.setState ({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit(event) {
        this.props.obtainAuthToken(this.state.login,this.state.password)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event) }>
                    <input type='text' name='login' placeholder='login' value={this.state.login} onChange={(event) => this.handleChange(event)} />
                    <input type='password' name='password' placeholder='password' value={this.state.password} onChange={(event) => this.handleChange(event)}  />
                    <input type='submit' value='Login' />
                </form>
            </div>
        )
    }
}

export default LoginForm;


