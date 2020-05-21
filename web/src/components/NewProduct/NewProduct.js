import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ProductForm from 'src/components/ProductForm'

const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProductMutation($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
    }
  }
`

const NewProduct = () => {
  const [createProduct, { loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.products())
      },
    }
  )

  const onSave = (input) => {
    input.price = parseFloat(input.price)
    input.cost = parseFloat(input.cost)
    createProduct({ variables: { input } })
  }

  return (
    <div>
      <header>
        <h2>New Product</h2>
      </header>
      <div>
        <ProductForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProduct
