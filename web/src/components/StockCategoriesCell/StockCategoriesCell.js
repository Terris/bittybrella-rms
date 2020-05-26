import { Link, routes } from '@redwoodjs/router'

import StockCategories from 'src/components/StockCategories'

export const QUERY = gql`
  query STOCK_CATEGORIES {
    stockCategories {
      id
      name
      createdAt
      stockItemId
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
      {'No stockCategories yet. '}
      <Link
        to={routes.newStockCategory()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ stockCategories }) => {
  return <StockCategories stockCategories={stockCategories} />
}
