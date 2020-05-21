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

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No menus yet. '}
      <Link
        to={routes.newMenu()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ menus }) => {
  return <Menus menus={menus} />
}
