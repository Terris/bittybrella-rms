import AdminLayout from 'src/layouts/AdminLayout'
import { Link, routes } from '@redwoodjs/router'

const TicketsLayout = (props) => {
  return (
    <AdminLayout>
      <h1>
        <Link to={routes.tickets()}>Tickets</Link>
      </h1>
      <div className="mod">
        <Link to={routes.newTicket()} className="btn btn-small">
          + New Ticket
        </Link>
      </div>
      <main>{props.children}</main>
    </AdminLayout>
  )
}

export default TicketsLayout
