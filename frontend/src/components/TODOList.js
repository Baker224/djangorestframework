const TODOItem = ({TODO}) => {
    return (
        <tr>
            <td>
                {TODO.project}
            </td>
            <td>
                {TODO.text}
            </td>
            <td>
                {TODO.created_at}
            </td>
            <td>
                {TODO.updated_at}
            </td>
            <td>
                {TODO.creater}
            </td>
            <td>
                {TODO.is_active}
            </td>

        </tr>
    )
}

const TODOList = ({TODO}) => {
    return (
        <table>
            <th>
                Project
            </th>
            <th>
                Text
            </th>
            <th>
                Create
            </th>
            <th>
                Update
            </th>
            <th>
                Createre
            </th>
            <th>
                Active
            </th>


            {TODO.map((TODO) => <TODOItem TODO = {TODO} />)}
        </table>
    )
}

export default TODOList