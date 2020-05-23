import AdminLayout from 'src/layouts/AdminLayout'
import { Link, routes } from '@redwoodjs/router'

const UsersLayout = (props) => {
  return (
    <AdminLayout>
      <h1>
        <Link to={routes.users()}>Users</Link>
      </h1>
      <div className="mod">
        <Link to={routes.newUser()} className="btn btn-small">
          + New User
        </Link>
      </div>
      <main>{props.children}</main>
    </AdminLayout>
  )
}

export default UsersLayout
