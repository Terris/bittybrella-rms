import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($id: Int!) {
    deleteProduct(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const ProductsList = ({ products }) => {
  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete product ' + id + '?')) {
      deleteProduct({ variables: { id }, refetchQueries: ['POSTS'] })
    }
  }

  return (
    <div className="mod">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>cost</th>
            <th>createdAt</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{truncate(product.id)}</td>
              <td>{truncate(product.name)}</td>
              <td>{truncate(product.description)}</td>
              <td>{truncate('$' + product.price.toFixed(2))}</td>
              <td>{truncate('$' + product.cost.toFixed(2))}</td>
              <td>{timeTag(product.createdAt)}</td>
              <td>
                <nav className="table-actions">
                  <Link
                    to={routes.product({ id: product.id })}
                    title={'Show product ' + product.id + ' detail'}
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProduct({ id: product.id })}
                    title={'Edit product ' + product.id}
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete product ' + product.id}
                    onClick={() => onDeleteClick(product.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsList
