import { Link, routes } from '@redwoodjs/router'
import StockItems from 'src/components/StockItems'

export const QUERY = gql`
  query STOCK_ITEMS {
    stockItems {
      id
      name
      quantity
      par
      cost
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
      {'No stockItems yet. '}
      <Link
        to={routes.newStockItem()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ stockItems }) => {
  return <StockItems stockItems={stockItems} />
}
