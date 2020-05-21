import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_MENU_MUTATION = gql`
  mutation DeleteMenuMutation($id: Int!) {
    deleteMenu(id: $id) {
      id
    }
  }
`

const Menu = ({ menu }) => {
  const [deleteMenu] = useMutation(DELETE_MENU_MUTATION, {
    onCompleted: () => {
      navigate(routes.menus())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete menu ' + id + '?')) {
      deleteMenu({ variables: { id } })
    }
  }

  return (
    <>
      <h2>Menu {menu.id} Detail</h2>
      <div className="mod">
        <table>
          <tbody>
            <tr>
              <td>id</td>
              <td>{menu.id}</td>
            </tr>
            <tr>
              <td>name</td>
              <td>{menu.name}</td>
            </tr>
            <tr>
              <td>description</td>
              <td>{menu.description}</td>
            </tr>
            <tr>
              <td>createdAt</td>
              <td>{menu.createdAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="mod">
        <Link to={routes.editMenu({ id: menu.id })} className="btn btn-small">
          Edit
        </Link>{' '}
        <a
          href="#"
          onClick={() => onDeleteClick(menu.id)}
          className="btn btn-small"
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Menu
