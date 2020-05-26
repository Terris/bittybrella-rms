import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const productsOnTickets = () => {
  return db.productsOnTickets.findMany()
}

export const productsOnTicket = ({ id }) => {
  return db.productsOnTicket.findOne({
    where: { id },
  })
}

export const createProductOnTickets = ({ input }) => {
  return db.productsOnTicket.create({
    data: input,
  })
}

export const updateProductsOnTicket = ({ id, input }) => {
  return db.productsOnTicket.update({
    data: input,
    where: { id },
  })
}

export const deleteProduct = ({ id }) => {
  requireAuth()
  return db.productsOnTicket.delete({
    where: { id },
  })
}
