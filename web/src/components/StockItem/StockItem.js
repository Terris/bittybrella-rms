import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_STOCK_ITEM_MUTATION = gql`
  mutation DeleteStockItemMutation($id: Int!) {
    deleteStockItem(id: $id) {
      id
    }
  }
`

const StockItem = ({ stockItem }) => {
  const [deleteStockItem] = useMutation(DELETE_STOCK_ITEM_MUTATION, {
    onCompleted: () => {
      navigate(routes.stockItems())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete stockItem ' + id + '?')) {
      deleteStockItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="bg-white border rounded-lg overflow-hidden">
        <header className="bg-gray-300 text-gray-700 py-3 px-4">
          <h2 className="text-sm font-semibold">StockItem {stockItem.id} Detail</h2>
        </header>
        <table className="w-full text-sm">
          <tbody>
            <tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">id</td>
              <td className="p-3">{stockItem.id}</td>
            </tr><tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">name</td>
              <td className="p-3">{stockItem.name}</td>
            </tr><tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">quantity</td>
              <td className="p-3">{stockItem.quantity}</td>
            </tr><tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">par</td>
              <td className="p-3">{stockItem.par}</td>
            </tr><tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">cost</td>
              <td className="p-3">{stockItem.cost}</td>
            </tr><tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">createdAt</td>
              <td className="p-3">{stockItem.createdAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="my-4 mx-2 text-center">
        <ul>
          <li className="inline-block ml-2">
            <Link
              to={routes.editStockItem({ id: stockItem.id })}
              className="text-xs bg-blue-600 text-white hover:bg-blue-700 rounded px-4 py-2 uppercase font-semibold tracking-wide"
            >
              Edit
            </Link>
          </li>
          <li className="inline-block ml-2">
            <a
              href="#"
              className="text-xs bg-red-600 text-white hover:bg-red-700 rounded px-4 py-2 uppercase font-semibold tracking-wide"
              onClick={() => onDeleteClick(stockItem.id)}
            >
              Delete
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default StockItem
