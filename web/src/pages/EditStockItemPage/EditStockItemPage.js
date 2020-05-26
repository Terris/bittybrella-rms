import StockItemsLayout from 'src/layouts/StockItemsLayout'
import EditStockItemCell from 'src/components/EditStockItemCell'

const EditStockItemPage = ({ id }) => {
  return (
    <StockItemsLayout>
      <EditStockItemCell id={id} />
    </StockItemsLayout>
  )
}

export default EditStockItemPage
