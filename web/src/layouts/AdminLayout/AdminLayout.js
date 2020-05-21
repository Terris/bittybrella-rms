import { Link, routes } from '@redwoodjs/router'

const AdminLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <div className="bg-white font-sans px-8">
        <div className="navigation flex py-4">
          <Link
            to={routes.admin()}
            className="text-gray-700 hover:text-gray-900 hover:underline pr-4 py-2"
          >
            Admin
          </Link>
          <Link
            to={routes.products()}
            className="text-gray-700 hover:text-gray-900 hover:underline px-4 py-2"
          >
            Products
          </Link>
        </div>
        {children}
      </div>
    </div>
  )
}

export default AdminLayout
