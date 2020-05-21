import { Link, routes } from '@redwoodjs/router'
import Menus from 'src/components/Menus'

export const QUERY = gql`
  query MENUS {
    menus {
      id
      name
      description
      createdAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div className="loader">Loading...</div>

export const Empty = () => {
  return (
    <p>
      {'No menus yet. '}
      <Link to={routes.newMenu()}>{'Create one?'}</Link>
    </p>
  )
}

export const Success = ({ menus }) => {
  return <Menus menus={menus} />
}
