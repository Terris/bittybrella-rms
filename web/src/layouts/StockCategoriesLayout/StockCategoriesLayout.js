import { Link, routes } from '@redwoodjs/router'

const StockCategoriesLayout = (props) => {
  return (
    <AdminLayout>
      <h1>
        <Link to={routes.stockCategories()}>StockCategories</Link>
      </h1>
      <div className="mod">
        <Link to={routes.newStockCategory()} className="btn btn-small">
          + New StockCategory
        </Link>
      </div>
      <main>{props.children}</main>
    </AdminLayout>
  )
}

export default StockCategoriesLayout
