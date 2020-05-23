import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const tickets = () => {
  requireAuth()
  return db.ticket.findMany()
}

export const ticket = ({ id }) => {
  requireAuth()
  return db.ticket.findOne({
    where: { id },
  })
}

export const createTicket = ({ input }) => {
  requireAuth()
  return db.ticket.create({
    data: input,
  })
}

export const updateTicket = ({ id, input }) => {
  requireAuth()
  return db.ticket.update({
    data: input,
    where: { id },
  })
}

export const deleteTicket = ({ id }) => {
  requireAuth()
  return db.ticket.delete({
    where: { id },
  })
}

export const Ticket = {
  products: (_obj, { root }) =>
    db.ticket.findOne({ where: { id: root.id } }).products(),
}
