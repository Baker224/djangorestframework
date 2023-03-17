import React from 'react'
import axios from 'axios'
import UsersList from './components/UsersList.js'
import TODOList from './components/TODOList.js'
import ProjectsList from './components/ProjectsList.js'
import UserProjectList from './components/UserProjectList.js'
import LoginForm from './components/LoginForm.js'
import TODOForm from './components/TODOForm.js'
import ProjectForm from './components/ProjectForm.js'


import {HashRouter, BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            'users' : [],
            'TODO' : [],
            'projects': [],
            'token': ''

        }
    }

    obtainAuthToken(login, password) {
        axios
            .post('http://127.0.0.1:8000/api-auth-token/', {
                'username': login,
                'password': password
            })
            .then(response => {
                const token = response.data.token
                localStorage.setItem('token', token)
                this.setState ({
                        'token': token}, this.getData)
            })
            .catch(error => console.log(error))
    }

    create_TODO(text, projects, users) {

    console.log(projects,users.id)
        let headers = this.getHeaders()

             axios
            .post('http://127.0.0.1:8000/api/create_TODO/', {'text': text, 'project': projects, 'creater': users}, {headers})
            .then(response => {
                this.getData()
             })
            .catch(error => {
                console.log(error)
                console.log('otladka')


            })
    }






    create_project(title, repo, users) {

    console.log(title,users.id)

        let headers = this.getHeaders()

             axios
            .post('http://127.0.0.1:8000/api/project', {'text': title, 'text': repo, 'users': users}, {headers})
            .then(response => {
                this.getData()
             })
            .catch(error => {
                console.log(error)
                console.log('otladka')


            })
    }

    isAuth() {
        return !!this.state.token
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        this.setState ( {'token': token}, this.getData)}

    getHeaders(){
        if (this.isAuth()) {
            return {
                'Authorization': 'Token ' + this.state.token
            }
        }
        return
    }

    getData() {
        let headers = this.getHeaders()

        axios
            .get('http://127.0.0.1:8000/api/MyUsers', {headers})
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
            .get('http://127.0.0.1:8000/api/TODO', {headers})
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
            .get('http://127.0.0.1:8000/api/Project', {headers})
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



    logOut() {
        let token = localStorage.setItem('token', '')
        this.setState({
            'token': ''},
            this.getData)
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                <nav>
                    <li> <Link to='/users'> users </Link> </li>
                    <li> <Link to='/TODO'> TODO </Link></li>
                    <li> <Link to='/create_TODO'> Create TODO </Link></li>
                    <li> <Link to='/create_project'> Create Project </Link></li>
                    <li> <Link to='/projects'> projects </Link> </li>
                    <li> {this.isAuth() ? <button onClick={() => this.logOut()} >Logout</button> : <Link to='/login'> Login </Link> } </li>

                </nav>

                    <Routes>
                        <Route path='/users' >
                            <Route index  element ={<UsersList users = {this.state.users} />} />
                            <Route path=":userId" element={<UserProjectList projects={this.state.projects} />} />

                            </Route>

                        <Route exact path='/login' element ={<LoginForm obtainAuthToken = {(login, password) => this.obtainAuthToken(login, password)} />} />

                        <Route exact path='/create_TODO' element ={<TODOForm  projects = {this.state.projects}  users = {this.state.users} create_TODO={(text, projects, users) => this.create_TODO(text, projects, users)}  />} />
                        <Route exact path='/create_project' element ={<ProjectForm  users = {this.state.users} create_project={(title, repo, users) => this.create_project(title, repo, users)}  />} />

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
