import { Link, routes } from '@redwoodjs/router'
import Tickets from 'src/components/Tickets'

export const QUERY = gql`
  query TICKETS {
    tickets {
      id
      settled
      createdAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div className="loader">Loading...</div>

export const Empty = () => {
  return (
    <p>
      {'No tickets yet. '}
      <Link to={routes.newTicket()}>{'Create one?'}</Link>
    </p>
  )
}

export const Success = ({ tickets }) => {
  return <Tickets tickets={tickets} />
}
