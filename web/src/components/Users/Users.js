import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const UsersList = ({ users }) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id }, refetchQueries: ['USERS'] })
    }
  }

  return (
    <div className="mod">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>role</th>
            <th>createdAt</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{truncate(user.id)}</td>
              <td>{truncate(user.name)}</td>
              <td>{truncate(user.email)}</td>
              <td>{truncate(user.role)}</td>
              <td>{timeTag(user.createdAt)}</td>
              <td>
                <nav className="table-actions">
                  <Link
                    to={routes.user({ id: user.id })}
                    title={'Show user ' + user.id + ' detail'}
                  >
                    Show
                  </Link>

                  <Link
                    to={routes.editUser({ id: user.id })}
                    title={'Edit user ' + user.id}
                  >
                    Edit
                  </Link>

                  <a
                    href="#"
                    title={'Delete user ' + user.id}
                    onClick={() => onDeleteClick(user.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList
