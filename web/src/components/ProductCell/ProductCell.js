import Product from 'src/components/Product'

export const QUERY = gql`
  query FIND_PRODUCT_BY_ID($id: Int!) {
    product: product(id: $id) {
      id
      name
      description
      price
      cost
      createdAt
    }
  }
`

export const Loading = () => <div className="loader">Loading...</div>

export const Empty = () => <p>Product not found</p>

export const Success = ({ product }) => {
  return <Product product={product} />
}
