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

export const Loading = () => <div className="loader">Loading...</div>

export const Empty = () => <p>Menu not found</p>

export const Success = ({ menu }) => {
  return <Menu menu={menu} />
}
