import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ProductForm from 'src/components/ProductForm'

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
const UPDATE_PRODUCT_MUTATION = gql`
  mutation UpdateProductMutation($id: Int!, $input: UpdateProductInput!) {
    updateProduct(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div className="loader">Loading...</div>

export const Success = ({ product }) => {
  const [updateProduct, { loading, error }] = useMutation(
    UPDATE_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.products())
      },
    }
  )

  const onSave = (input, id) => {
    input.price = parseFloat(input.price)
    input.cost = parseFloat(input.cost)
    updateProduct({ variables: { id, input } })
  }

  return (
    <>
      <h2>Edit Product {product.id}</h2>
      <ProductForm
        product={product}
        onSave={onSave}
        error={error}
        loading={loading}
      />
    </>
  )
}
