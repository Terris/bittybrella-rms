import { db } from 'src/lib/db'

export const stockItems = () => {
  return db.stockItem.findMany()
}

export const stockItem = ({ id }) => {
  return db.stockItem.findOne({
    where: { id },
  })
}

export const createStockItem = ({ input }) => {
  return db.stockItem.create({
    data: input,
  })
}

export const updateStockItem = ({ id, input }) => {
  return db.stockItem.update({
    data: input,
    where: { id },
  })
}

export const deleteStockItem = ({ id }) => {
  return db.stockItem.delete({
    where: { id },
  })
}

export const StockItem = {
  stockCategories: (_obj, { root }) => db.stockItem.findOne({ where: { id: root.id } }).stockCategories(),
}
