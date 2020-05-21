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
    <div>
      <header>
        <h2>New Menu</h2>
      </header>
      <div>
        <MenuForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMenu
