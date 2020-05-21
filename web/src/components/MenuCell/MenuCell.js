import Menu from 'src/components/Menu'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Menu not found</div>

export const Success = ({ menu }) => {
  return <Menu menu={menu} />
}
