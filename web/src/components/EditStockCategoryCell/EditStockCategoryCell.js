import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import StockCategoryForm from 'src/components/StockCategoryForm'

export const QUERY = gql`
  query FIND_STOCK_CATEGORY_BY_ID($id: Int!) {
    stockCategory: stockCategory(id: $id) {
      id
      name
      createdAt
      stockItemId
    }
  }
`
const UPDATE_STOCK_CATEGORY_MUTATION = gql`
  mutation UpdateStockCategoryMutation($id: Int!, $input: UpdateStockCategoryInput!) {
    updateStockCategory(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ stockCategory }) => {
  const [updateStockCategory, { loading, error }] = useMutation(UPDATE_STOCK_CATEGORY_MUTATION, {
    onCompleted: () => {
      navigate(routes.stockCategories())
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { stockItemId: parseInt(input.stockItemId), })
    updateStockCategory({ variables: { id, input: castInput } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit StockCategory {stockCategory.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <StockCategoryForm stockCategory={stockCategory} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
