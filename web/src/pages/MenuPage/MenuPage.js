import MenusLayout from 'src/layouts/MenusLayout'
import MenuCell from 'src/components/MenuCell'

const MenuPage = ({ id }) => {
  return (
    <MenusLayout>
      <MenuCell id={id} />
    </MenusLayout>
  )
}

export default MenuPage
