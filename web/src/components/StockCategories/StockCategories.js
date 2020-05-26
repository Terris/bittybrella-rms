import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_STOCK_CATEGORY_MUTATION = gql`
  mutation DeleteStockCategoryMutation($id: Int!) {
    deleteStockCategory(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
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

const StockCategoriesList = ({ stockCategories }) => {
  const [deleteStockCategory] = useMutation(DELETE_STOCK_CATEGORY_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete stockCategory ' + id + '?')) {
      deleteStockCategory({ variables: { id }, refetchQueries: ['STOCK_CATEGORIES'] })
    }
  }

  return (
    <div className="bg-white text-gray-900 border rounded-lg overflow-x-scroll">
      <table className="table-auto w-full min-w-3xl text-sm">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="font-semibold text-left p-3">id</th>
            <th className="font-semibold text-left p-3">name</th>
            <th className="font-semibold text-left p-3">createdAt</th>
            <th className="font-semibold text-left p-3">stockItemId</th>
            <th className="font-semibold text-left p-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {stockCategories.map((stockCategory) => (
            <tr
              key={stockCategory.id}
              className="odd:bg-gray-100 even:bg-white border-t"
            >
              <td className="p-3">{truncate(stockCategory.id)}</td>
              <td className="p-3">{truncate(stockCategory.name)}</td>
              <td className="p-3">{timeTag(stockCategory.createdAt)}</td>
              <td className="p-3">{truncate(stockCategory.stockItemId)}</td>
              <td className="p-3 pr-4 text-right whitespace-no-wrap">
                <nav>
                  <ul>
                    <li className="inline-block">
                      <Link
                        to={routes.stockCategory({ id: stockCategory.id })}
                        title={'Show stockCategory ' + stockCategory.id + ' detail'}
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Show
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        to={routes.editStockCategory({ id: stockCategory.id })}
                        title={'Edit stockCategory ' + stockCategory.id}
                        className="text-xs bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Edit
                      </Link>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        title={'Delete stockCategory ' + stockCategory.id}
                        className="text-xs bg-gray-100 text-red-600 hover:bg-red-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                        onClick={() => onDeleteClick(stockCategory.id)}
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StockCategoriesList
