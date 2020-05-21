import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_TICKET_MUTATION = gql`
  mutation DeleteTicketMutation($id: Int!) {
    deleteTicket(id: $id) {
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

const TicketsList = ({ tickets }) => {
  const [deleteTicket] = useMutation(DELETE_TICKET_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete ticket ' + id + '?')) {
      deleteTicket({ variables: { id }, refetchQueries: ['TICKETS'] })
    }
  }

  return (
    <div className="mod">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>settled</th>
            <th>createdAt</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{truncate(ticket.id)}</td>
              <td>{truncate(ticket.settled)}</td>
              <td>{timeTag(ticket.createdAt)}</td>
              <td>
                <nav className="table-actions">
                  <Link
                    to={routes.ticket({ id: ticket.id })}
                    title={'Show ticket ' + ticket.id + ' detail'}
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTicket({ id: ticket.id })}
                    title={'Edit ticket ' + ticket.id}
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete ticket ' + ticket.id}
                    onClick={() => onDeleteClick(ticket.id)}
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

export default TicketsList
