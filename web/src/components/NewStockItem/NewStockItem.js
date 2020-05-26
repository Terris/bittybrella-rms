import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import StockItemForm from 'src/components/StockItemForm'

const CREATE_STOCK_ITEM_MUTATION = gql`
  mutation CreateStockItemMutation($input: CreateStockItemInput!) {
    createStockItem(input: $input) {
      id
    }
  }
`

const NewStockItem = () => {
  const [createStockItem, { loading, error }] = useMutation(CREATE_STOCK_ITEM_MUTATION, {
    onCompleted: () => {
      navigate(routes.stockItems())
    },
  })

  const onSave = (input) => {
    createStockItem({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New StockItem</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <StockItemForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStockItem
