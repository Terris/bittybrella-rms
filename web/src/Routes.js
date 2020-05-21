// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
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
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
