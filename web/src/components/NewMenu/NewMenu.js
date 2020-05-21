import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MenuForm from 'src/components/MenuForm'

const CREATE_MENU_MUTATION = gql`
  mutation CreateMenuMutation($input: CreateMenuInput!) {
    createMenu(input: $input) {
      id
    }
  }
`

const NewMenu = () => {
  const [createMenu, { loading, error }] = useMutation(CREATE_MENU_MUTATION, {
    onCompleted: () => {
      navigate(routes.menus())
    },
  })

  const onSave = (input) => {
    createMenu({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Menu</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <MenuForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMenu
