import { Link, routes } from '@redwoodjs/router'

const AdminHeader = () => (
  <header className="header">
    <nav className="nav-primary">
      <Link
        to={routes.admin()}
        className="text-gray-700 hover:text-gray-900 hover:underline pr-4 py-2"
      >
        Admin
      </Link>
      <Link
        to={routes.products()}
        className="text-gray-700 hover:text-gray-900 hover:underline px-4 py-2"
      >
        Products
      </Link>
      <Link
        to={routes.menus()}
        className="text-gray-700 hover:text-gray-900 hover:underline px-4 py-2"
      >
        Menus
      </Link>
    </nav>
  </header>
)

export default AdminHeader
