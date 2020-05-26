import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import StockItemForm from 'src/components/StockItemForm'

export const QUERY = gql`
  query FIND_STOCK_ITEM_BY_ID($id: Int!) {
    stockItem: stockItem(id: $id) {
      id
      name
      quantity
      par
      cost
      createdAt
    }
  }
`
const UPDATE_STOCK_ITEM_MUTATION = gql`
  mutation UpdateStockItemMutation($id: Int!, $input: UpdateStockItemInput!) {
    updateStockItem(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ stockItem }) => {
  const [updateStockItem, { loading, error }] = useMutation(UPDATE_STOCK_ITEM_MUTATION, {
    onCompleted: () => {
      navigate(routes.stockItems())
    },
  })

  const onSave = (input, id) => {
    updateStockItem({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit StockItem {stockItem.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <StockItemForm stockItem={stockItem} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
