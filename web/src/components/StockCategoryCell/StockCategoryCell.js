import StockCategory from 'src/components/StockCategory'

export const QUERY = gql`
  query FIND_STOCK_CATEGORY_BY_ID($id: Int!) {
    stockCategory: stockCategory(id: $id) {
      id
      name
      createdAt
      stockItemId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>StockCategory not found</div>

export const Success = ({ stockCategory }) => {
  return <StockCategory stockCategory={stockCategory} />
}
