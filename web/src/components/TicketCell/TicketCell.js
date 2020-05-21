import Ticket from 'src/components/Ticket'

export const QUERY = gql`
  query FIND_TICKET_BY_ID($id: Int!) {
    ticket: ticket(id: $id) {
      id
      settled
      createdAt
    }
  }
`

export const Loading = () => <div className="loader">Loading...</div>

export const Empty = () => <p>Ticket not found</p>

export const Success = ({ ticket }) => {
  return <Ticket ticket={ticket} />
}
