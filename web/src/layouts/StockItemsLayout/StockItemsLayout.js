import AdminLayout from 'src/layouts/AdminLayout'
import { Link, routes } from '@redwoodjs/router'

const StockItemsLayout = (props) => {
  return (
    <AdminLayout>
      <h1>
        <Link to={routes.stockItems()}>StockItems</Link>
      </h1>
      <div className="mod">
        <Link to={routes.newStockItem()} className="btn btn-snall">
          + New StockItem
        </Link>
      </div>
      <main>{props.children}</main>
    </AdminLayout>
  )
}

export default StockItemsLayout
