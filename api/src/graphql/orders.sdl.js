export const schema = gql`
  type Order {
    id: Int!
    description: String!
    placed: Boolean!
    createdAt: DateTime!
  }

  type Query {
    orders: [Order!]!
    order(id: Int!): Order!
  }

  input CreateOrderInput {
    description: String!
    placed: Boolean!
  }

  input UpdateOrderInput {
    description: String
    placed: Boolean
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order!
    updateOrder(id: Int!, input: UpdateOrderInput!): Order!
    deleteOrder(id: Int!): Order!
  }
`
