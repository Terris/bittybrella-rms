import { Link, routes } from '@redwoodjs/router'

const AdminHeader = () => (
  <header className="header">
    <nav className="nav-primary">
      <Link to={routes.admin()}>Admin</Link>
      <Link to={routes.products()}>Products</Link>
      <Link to={routes.menus()}>Menus</Link>
      <Link to={routes.tickets()}>Tickets</Link>
    </nav>
  </header>
)

export default AdminHeader
