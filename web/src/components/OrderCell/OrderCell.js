import Order from 'src/components/Order'

export const QUERY = gql`
  query FIND_ORDER_BY_ID($id: Int!) {
    order: order(id: $id) {
      id
      description
      placed
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Order not found</div>

export const Success = ({ order }) => {
  return <Order order={order} />
}
