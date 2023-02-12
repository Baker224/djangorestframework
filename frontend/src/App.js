import React from 'react'
import axios from 'axios'
import UsersList from './components/UsersList.js'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            'users' : []
        }
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8000/api/MyUsers')
            .then(response => {
                const users = response.data
                this.setState (
                    {
                        'users': users
                    }
                )
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <UsersList users = {this.state.users} />
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
export const Menu = class Menu extends (React.Component) {
  render() {
    return <ul>
      <li><a href=""> 1</a></li>
      <li><a href=""> 2</a></li>
      <li><a href=""> 3</a></li>
    </ul>

  }
};