import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import OrderForm from 'src/components/OrderForm'

const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrderMutation($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
    }
  }
`

const NewOrder = () => {
  const [createOrder, { loading, error }] = useMutation(CREATE_ORDER_MUTATION, {
    onCompleted: () => {
      navigate(routes.orders())
    },
  })

  const onSave = (input) => {
    createOrder({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Order</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <OrderForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewOrder
