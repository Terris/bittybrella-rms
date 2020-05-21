import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_MENU_MUTATION = gql`
  mutation DeleteMenuMutation($id: Int!) {
    deleteMenu(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
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

const MenusList = ({ menus }) => {
  const [deleteMenu] = useMutation(DELETE_MENU_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete menu ' + id + '?')) {
      deleteMenu({ variables: { id }, refetchQueries: ['POSTS'] })
    }
  }

  return (
    <div className="mod">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>description</th>
            <th>createdAt</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {menus.map((menu) => (
            <tr key={menu.id}>
              <td>{truncate(menu.id)}</td>
              <td>{truncate(menu.name)}</td>
              <td>{truncate(menu.description)}</td>
              <td>{timeTag(menu.createdAt)}</td>
              <td>
                <nav className="table-actions">
                  <Link
                    to={routes.menu({ id: menu.id })}
                    title={'Show menu ' + menu.id + ' detail'}
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMenu({ id: menu.id })}
                    title={'Edit menu ' + menu.id}
                  >
                    Edit
                  </Link>

                  <a
                    href="#"
                    title={'Delete menu ' + menu.id}
                    onClick={() => onDeleteClick(menu.id)}
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

export default MenusList
