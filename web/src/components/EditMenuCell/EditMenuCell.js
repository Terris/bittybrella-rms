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

export const Loading = () => <div>Loading...</div>

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
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Menu {menu.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <MenuForm menu={menu} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
