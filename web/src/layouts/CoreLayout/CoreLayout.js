import { Link, routes } from '@redwoodjs/router'

const CoreLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1 className="logo">
          <Link to={routes.home()}>Bitty Brella RMS</Link>
        </h1>
        <nav className="nav-primary">
          <Link to={routes.about()}>About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default CoreLayout
