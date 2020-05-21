import AdminLayout from 'src/layouts/AdminLayout'
import { Link, routes } from '@redwoodjs/router'

const MenusLayout = (props) => {
  return (
    <AdminLayout>
      <h1>
        <Link to={routes.menus()}>Menus</Link>
      </h1>
      <div className="mod">
        <Link to={routes.newMenu()} className="btn btn-small">
          + New Menu
        </Link>
      </div>
      <main>{props.children}</main>
    </AdminLayout>
  )
}

export default MenusLayout
