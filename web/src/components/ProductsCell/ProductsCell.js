import { Link, routes } from '@redwoodjs/router'
import Products from 'src/components/Products'

export const QUERY = gql`
  query PRODUCTS {
    products {
      id
      name
      description
      price
      cost
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
      {'No products yet. '}
      <Link to={routes.newProduct()}>{'Create one?'}</Link>
    </p>
  )
}

export const Success = ({ products }) => {
  return <Products products={products} />
}
