import React from 'react'
import axios from 'axios'

import {HashRouter, BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom'

class TODOForm extends React.Component {
    constructor(props) {
        super(props)
        this.obtainAuthToken = props.obtainAuthToken
        this.state = {
            'text' : '',
            'projects' : []
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

    handleProjectsSelect(event){
        if (!event.target.selectedOptions) {
            this.setState( {
                'projects': []
            })
            return;
        }
        let projects = []
        for (let option of event.target.selectedOptions) {
            projects.push(option.value)
        }
        this.setState ({
            'projects' : projects
        })
    }

    handleSubmit(event) {

        this.props.create_TODO(this.state.text,this.state.projects, this.state.users)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event) }>
                    <input type='text' name='text' placeholder='text' value={this.state.text} onChange={(event) => this.handleChange(event)} />
                    <select multiple onChange={(event) => this.handleProjectsSelect(event)} >
                        {this.props.projects.map((project) => <option value={project.id}>{project.title} </option> )}
                    </select>
                    <select multiple onChange={(event) => this.handleUsersSelect(event)} >
                        {this.props.users.map((user) => <option value={user.id}> {user.username}</option> )}
                    </select>

                    <input type='submit' value='Create' />
                </form>
            </div>
        )
    }
}

export default TODOForm;


