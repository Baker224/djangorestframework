import {Link} from 'react-router-dom'

const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.first_name}
            </td>
            <td>
                <Link to={`/users/${user.id}`}> {user.last_name} </Link>
            </td>
            <td>
                {user.user_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const UsersList = ({users}) => {
    return (
        <table>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                User name
            </th>
            <th>
                Email
            </th>
            {users.map((user) => <UserItem user = {user} />)}
        </table>
    )
}

export default UsersList