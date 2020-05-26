import StockCategoriesLayout from 'src/layouts/StockCategoriesLayout'
import StockCategoryCell from 'src/components/StockCategoryCell'

const StockCategoryPage = ({ id }) => {
  return (
    <StockCategoriesLayout>
      <StockCategoryCell id={id} />
    </StockCategoriesLayout>
  )
}

export default StockCategoryPage
