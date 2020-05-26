import StockItem from 'src/components/StockItem'

export const QUERY = gql`
  query FIND_STOCK_ITEM_BY_ID($id: Int!) {
    stockItem: stockItem(id: $id) {
      id
      name
      quantity
      par
      cost
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>StockItem not found</div>

export const Success = ({ stockItem }) => {
  return <StockItem stockItem={stockItem} />
}
