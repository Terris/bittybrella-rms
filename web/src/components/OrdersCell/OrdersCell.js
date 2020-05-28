import { Link, routes } from '@redwoodjs/router'

import Orders from 'src/components/Orders'

export const QUERY = gql`
  query ORDERS {
    orders {
      id
      description
      placed
      createdAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No orders yet. '}
      <Link
        to={routes.newOrder()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ orders }) => {
  return <Orders orders={orders} />
}
