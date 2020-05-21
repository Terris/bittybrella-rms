import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TICKET_MUTATION = gql`
  mutation DeleteTicketMutation($id: Int!) {
    deleteTicket(id: $id) {
      id
    }
  }
`

const Ticket = ({ ticket }) => {
  const [deleteTicket] = useMutation(DELETE_TICKET_MUTATION, {
    onCompleted: () => {
      navigate(routes.tickets())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete ticket ' + id + '?')) {
      deleteTicket({ variables: { id } })
    }
  }

  return (
    <>
      <h2>Ticket {ticket.id} Detail</h2>
      <div className="mod">
        <table>
          <tbody>
            <tr>
              <td>id</td>
              <td>{ticket.id}</td>
            </tr>
            <tr>
              <td>settled</td>
              <td>{ticket.settled}</td>
            </tr>
            <tr>
              <td>createdAt</td>
              <td>{ticket.createdAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="table-actions">
        <Link
          to={routes.editTicket({ id: ticket.id })}
          className="btn btn-small"
        >
          Edit
        </Link>{' '}
        <a
          href="#"
          onClick={() => onDeleteClick(ticket.id)}
          className="btn btn-small"
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Ticket
