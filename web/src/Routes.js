// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home">
        <Route
          path="/admin/tickets/new"
          page={NewTicketPage}
          name="newTicket"
        />
        <Route
          path="/admin/tickets/{id:Int}/edit"
          page={EditTicketPage}
          name="editTicket"
        />
        <Route path="/admin/tickets/{id:Int}" page={TicketPage} name="ticket" />
        <Route path="/admin/tickets" page={TicketsPage} name="tickets" />
        <Route path="/admin/menus/new" page={NewMenuPage} name="newMenu" />
        <Route
          path="/admin/menus/{id:Int}/edit"
          page={EditMenuPage}
          name="editMenu"
        />
        <Route path="/admin/menus/{id:Int}" page={MenuPage} name="menu" />
        <Route path="/admin/menus" page={MenusPage} name="menus" />
        <Route path="/admin" page={AdminPage} name="admin" />
        <Route
          path="/admin/products/new"
          page={NewProductPage}
          name="newProduct"
        />
        <Route
          path="/admin/products/{id:Int}/edit"
          page={EditProductPage}
          name="editProduct"
        />
        <Route
          path="/admin/products/{id:Int}"
          page={ProductPage}
          name="product"
        />
        <Route path="/admin/products" page={ProductsPage} name="products" />
        <Route path="/admin/users/new" page={NewUserPage} name="newUser" />
        <Route
          path="/admin/users/{id:Int}/edit"
          page={EditUserPage}
          name="editUser"
        />
        <Route path="/admin/users/{id:Int}" page={UserPage} name="user" />
        <Route path="/admin/users" page={UsersPage} name="users" />
      </Private>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
