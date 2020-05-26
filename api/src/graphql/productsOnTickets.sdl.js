export const schema = gql`
  type ProductsOnTicket {
    id: Int!
    createdAt: DateTime!
  }

  type Query {
    productsOnTickets: [ProductsOnTicket!]!
    productsOnTicket(id: Int!): ProductsOnTicket!
  }

  input CreateProductsOnTicketInput {
    product: String!
    ticket: String!
    quantity: Int!
  }

  input UpdateProductsOnTicketInput {
    product: String
    ticket: String
    quantity: Int
  }

  type Mutation {
    createProductsOnTicket(input: CreateProductsInput!): ProductsOnTicket!
    updateProductsOnTicket(
      id: Int!
      input: UpdateProductsOnTicketInput!
    ): ProductsOnTicket!
    deleteProductsOnTicket(id: Int!): ProductsOnTicket!
  }
`
