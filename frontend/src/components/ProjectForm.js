import React from 'react'
import axios from 'axios'

import {HashRouter, BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.obtainAuthToken = props.obtainAuthToken
        this.state = {
            'title' : '',
            'repo' : '',
            'users': []
        }
    }

    handleChange(event){
        this.setState ({
            [event.target.name]:event.target.value
        })
    }

    handleUsersSelect(event) {
        if (!event.target.selectedOptions) {
                this.setState( {
                    'users': []
                })
                return;
            }
            let users = []
            for (let option of event.target.selectedOptions) {
                users.push(option.value)
            }
            this.setState ({
                'users' : users
            })
    }


    handleSubmit(event) {

        this.props.create_project(this.state.title,this.state.repo, this.state.users)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event) }>
                    <input type='text' name='title' placeholder='text' value={this.state.text} onChange={(event) => this.handleChange(event)} />
                    <input type='text' name='repo' placeholder='text' value={this.state.text} onChange={(event) => this.handleChange(event)} />
                    <select multiple onChange={(event) => this.handleUsersSelect(event)} >
                        {this.props.users.map((user) => <option value={user.id}> {user.username}</option> )}
                    </select>

                    <input type='submit' value='Create' />
                </form>
            </div>
        )
    }
}

export default ProjectForm;


