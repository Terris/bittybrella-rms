import { Link, routes } from '@redwoodjs/router'
import Users from 'src/components/Users'

export const QUERY = gql`
  query USERS {
    users {
      id
      name
      email
      role
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
      {'No users yet. '} <Link to={routes.newUser()}> {'Create one?'}</Link>
    </p>
  )
}

export const Success = ({ users }) => {
  return <Users users={users} />
}
