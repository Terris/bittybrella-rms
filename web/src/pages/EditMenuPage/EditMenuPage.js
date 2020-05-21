import MenusLayout from 'src/layouts/MenusLayout'
import EditMenuCell from 'src/components/EditMenuCell'

const EditMenuPage = ({ id }) => {
  return (
    <MenusLayout>
      <EditMenuCell id={id} />
    </MenusLayout>
  )
}

export default EditMenuPage
