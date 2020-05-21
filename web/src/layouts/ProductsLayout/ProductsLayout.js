import AdminLayout from 'src/layouts/AdminLayout'
import { Link, routes } from '@redwoodjs/router'

const ProductsLayout = (props) => {
  return (
    <AdminLayout>
      <h1>
        <Link to={routes.products()}>Products</Link>
      </h1>
      <div className="mod">
        <Link to={routes.newProduct()} className="btn btn-small">
          + New Product
        </Link>
      </div>
      <main>{props.children}</main>
    </AdminLayout>
  )
}

export default ProductsLayout
