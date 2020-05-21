import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const CoreLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <header className="header">
        <h1 className="logo">
          <Link to={routes.home()}>Bitty Brella RMS</Link>
        </h1>
        <nav className="nav-primary">
          <Link to={routes.about()}>About</Link>
        </nav>
        <nav className="nav-secondary">
          {isAuthenticated && <a href="#">{currentUser.email}</a>}
          <a href="#" onClick={isAuthenticated ? logOut : logIn}>
            {isAuthenticated ? 'Log Out' : 'Log In'}
          </a>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default CoreLayout
