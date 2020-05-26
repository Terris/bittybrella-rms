import StockCategoriesLayout from 'src/layouts/StockCategoriesLayout'
import EditStockCategoryCell from 'src/components/EditStockCategoryCell'

const EditStockCategoryPage = ({ id }) => {
  return (
    <StockCategoriesLayout>
      <EditStockCategoryCell id={id} />
    </StockCategoriesLayout>
  )
}

export default EditStockCategoryPage
