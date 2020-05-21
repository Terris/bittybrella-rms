import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MenuForm from 'src/components/MenuForm'

export const QUERY = gql`
  query FIND_MENU_BY_ID($id: Int!) {
    menu: menu(id: $id) {
      id
      name
      description
      createdAt
    }
  }
`
const UPDATE_MENU_MUTATION = gql`
  mutation UpdateMenuMutation($id: Int!, $input: UpdateMenuInput!) {
    updateMenu(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div className="loader">Loading...</div>

export const Success = ({ menu }) => {
  const [updateMenu, { loading, error }] = useMutation(UPDATE_MENU_MUTATION, {
    onCompleted: () => {
      navigate(routes.menus())
    },
  })

  const onSave = (input, id) => {
    updateMenu({ variables: { id, input } })
  }

  return (
    <>
      <h2>Edit Menu {menu.id}</h2>
      <MenuForm menu={menu} onSave={onSave} error={error} loading={loading} />
    </>
  )
}
