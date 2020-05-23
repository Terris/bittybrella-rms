import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_USER_MUTATION = gql`
  mutation DeleteUserMutation($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const User = ({ user }) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      navigate(routes.users())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <>
      <h2>User {user.id} Detail</h2>
      <div className="mod">
        <table>
          <tbody>
            <tr>
              <td>id</td>
              <td>{user.id}</td>
            </tr>
            <tr>
              <td>name</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>role</td>
              <td>{user.role}</td>
            </tr>
            <tr>
              <td>createdAt</td>
              <td>{user.createdAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="mod">
        <Link to={routes.editUser({ id: user.id })} className="btn">
          Edit
        </Link>{' '}
        <a href="#" onClick={() => onDeleteClick(user.id)} className="btn">
          Delete
        </a>
      </nav>
    </>
  )
}

export default User
