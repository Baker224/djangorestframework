import React from 'react'
import axios from 'axios'
import UsersList from './components/UsersList.js'
import TODOList from './components/TODOList.js'
import ProjectsList from './components/ProjectsList.js'
import UserProjectList from './components/UserProjectList.js'

import {HashRouter, BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            'users' : [],
            'TODO' : [],
            'projects': []

        }
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8000/api/MyUsers')
            .then(response => {
                const users = response.data.results
                this.setState (
                    {
                        'users': users

                    }
                )
            })
            .catch(error => console.log(error))

        axios
            .get('http://127.0.0.1:8000/api/TODO')
            .then(response => {
                const TODO = response.data.results
                this.setState (
                    {
                        'TODO': TODO

                    }
                )
            })
            .catch(error => console.log(error))

        axios
            .get('http://127.0.0.1:8000/api/Project')
            .then(response => {
                const projects = response.data.results
                this.setState (
                    {
                        'projects': projects

                    }
                )
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                <nav>
                    <li> <Link to='/users'> users </Link> </li>
                    <li> <Link to='/TODO'> TODO </Link></li>
                    <li> <Link to='/projects'> projects </Link> </li>
                </nav>

                    <Routes>
                        <Route path='/users' >
                            <Route index  element ={<UsersList users = {this.state.users} />} />
                            <Route path=':userId'  element ={<UserProjectList projects = {this.state.projects} />} />
                            </Route>

                        <Route exact path='/TODO' element ={<TODOList TODO = {this.state.TODO} />} />
                        <Route exact path='/projects' element ={<ProjectsList projects = {this.state.projects} />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;


export const Footer = class Footer extends (React.Component) {
  render() {
    return <div> Footer </div>;
  }
};
