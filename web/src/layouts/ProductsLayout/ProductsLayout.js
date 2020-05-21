import AdminLayout from 'src/layouts/AdminLayout'
import { Link, routes } from '@redwoodjs/router'

const ProductsLayout = (props) => {
  return (
    <AdminLayout>
      <header className="flex justify-between py-4">
        <h1 className="text-xl font-semibold">
          <Link
            to={routes.products()}
            className="text-gray-700 hover:text-gray-900 hover:underline"
          >
            Products
          </Link>
        </h1>
        <Link
          to={routes.newProduct()}
          className="flex bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide rounded"
        >
          <div className="text-xl leading-none">+</div>
          <div className="ml-1 leading-loose">New Product</div>
        </Link>
      </header>
      <main className=" pb-4">{props.children}</main>
    </AdminLayout>
  )
}

export default ProductsLayout
