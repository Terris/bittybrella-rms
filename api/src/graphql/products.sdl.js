export const schema = gql`
  type Product {
    id: Int!
    name: String!
    description: String!
    price: Float!
    cost: Float!
    createdAt: DateTime!
  }

  type Query {
    products: [Product!]!
    product(id: Int!): Product!
  }

  input CreateProductInput {
    name: String!
    description: String!
    price: Float!
    cost: Float!
  }

  input UpdateProductInput {
    name: String
    description: String
    price: Float
    cost: Float
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product!
    updateProduct(id: Int!, input: UpdateProductInput!): Product!
    deleteProduct(id: Int!): Product!
  }
`
