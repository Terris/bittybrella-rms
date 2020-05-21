import { db } from 'src/lib/db'

export const menus = () => {
  return db.menu.findMany()
}

export const menu = ({ id }) => {
  return db.menu.findOne({
    where: { id },
  })
}

export const createMenu = ({ input }) => {
  return db.menu.create({
    data: input,
  })
}

export const updateMenu = ({ id, input }) => {
  return db.menu.update({
    data: input,
    where: { id },
  })
}

export const deleteMenu = ({ id }) => {
  return db.menu.delete({
    where: { id },
  })
}
