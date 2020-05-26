import { db } from 'src/lib/db'

export const stockCategories = () => {
  return db.stockCategory.findMany()
}

export const stockCategory = ({ id }) => {
  return db.stockCategory.findOne({
    where: { id },
  })
}

export const createStockCategory = ({ input }) => {
  return db.stockCategory.create({
    data: input,
  })
}

export const updateStockCategory = ({ id, input }) => {
  return db.stockCategory.update({
    data: input,
    where: { id },
  })
}

export const deleteStockCategory = ({ id }) => {
  return db.stockCategory.delete({
    where: { id },
  })
}

export const StockCategory = {
  stockItem: (_obj, { root }) => db.stockCategory.findOne({ where: { id: root.id } }).stockItem(),
}
