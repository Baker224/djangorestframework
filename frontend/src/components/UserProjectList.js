import {useParams} from 'react-router-dom'


const ProjectItem = ({project}) => {
    var params = useParams()
    console.log(params)
    return (
        <tr>
            <td>
                {project.title}
            </td>
            <td>
                {project.repo}
            </td>
            <td>
                {project.users}
            </td>
        </tr>
    )
}

const UserProjectList = ({ projects }) => {
    var { userId } = useParams()
    var filteredProjects = projects.filter((project) => project.users.includes(parseInt(userId)))

    return (
        <table>
            <th>
                 tittle
            </th>
            <th>
                Repo
            </th>
            <th>
                Users
            </th>

            {filteredProjects.map((project) => <ProjectItem project={project} />)}
        </table>
    )
}

export default UserProjectList