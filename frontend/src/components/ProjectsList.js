const ProjectItem = ({project}) => {
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

const ProjectsList = ({projects}) => {
    return (
        <table>
            <th>
                Title
            </th>
            <th>
                Repo
            </th>
            <th>
                Users
            </th>

            {projects.map((project) => <ProjectItem project = {project} />)}
        </table>
    )
}

export default ProjectsList