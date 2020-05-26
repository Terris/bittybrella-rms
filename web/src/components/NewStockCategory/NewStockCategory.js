import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import StockCategoryForm from 'src/components/StockCategoryForm'

const CREATE_STOCK_CATEGORY_MUTATION = gql`
  mutation CreateStockCategoryMutation($input: CreateStockCategoryInput!) {
    createStockCategory(input: $input) {
      id
    }
  }
`

const NewStockCategory = () => {
  const [createStockCategory, { loading, error }] = useMutation(CREATE_STOCK_CATEGORY_MUTATION, {
    onCompleted: () => {
      navigate(routes.stockCategories())
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { stockItemId: parseInt(input.stockItemId), })
    createStockCategory({ variables: { input: castInput } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New StockCategory</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <StockCategoryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStockCategory
