import StockItemsLayout from 'src/layouts/StockItemsLayout'
import StockItemCell from 'src/components/StockItemCell'

const StockItemPage = ({ id }) => {
  return (
    <StockItemsLayout>
      <StockItemCell id={id} />
    </StockItemsLayout>
  )
}

export default StockItemPage
