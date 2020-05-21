import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($id: Int!) {
    deleteProduct(id: $id) {
      id
    }
  }
`

const Product = ({ product }) => {
  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION, {
    onCompleted: () => {
      navigate(routes.products())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete product ' + id + '?')) {
      deleteProduct({ variables: { id } })
    }
  }

  return (
    <>
      <h2>Product {product.id} Detail</h2>
      <div className="mod">
        <table>
          <tbody>
            <tr>
              <td>id</td>
              <td>{product.id}</td>
            </tr>
            <tr>
              <td>name</td>
              <td>{product.name}</td>
            </tr>
            <tr>
              <td>description</td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>price</td>
              <td>${product.price.toFixed(2)}</td>
            </tr>
            <tr>
              <td>cost</td>
              <td>${product.cost.toFixed(2)}</td>
            </tr>
            <tr>
              <td>createdAt</td>
              <td>{product.createdAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="mod">
        <Link
          to={routes.editProduct({ id: product.id })}
          className="btn btn-small"
        >
          Edit
        </Link>{' '}
        <a
          href="#"
          onClick={() => onDeleteClick(product.id)}
          className="btn btn-small"
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Product
