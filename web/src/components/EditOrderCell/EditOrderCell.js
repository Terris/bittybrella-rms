import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import OrderForm from 'src/components/OrderForm'

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
const UPDATE_ORDER_MUTATION = gql`
  mutation UpdateOrderMutation($id: Int!, $input: UpdateOrderInput!) {
    updateOrder(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ order }) => {
  const [updateOrder, { loading, error }] = useMutation(UPDATE_ORDER_MUTATION, {
    onCompleted: () => {
      navigate(routes.orders())
    },
  })

  const onSave = (input, id) => {
    updateOrder({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Order {order.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <OrderForm order={order} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
