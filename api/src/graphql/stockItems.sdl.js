export const schema = gql`
  type StockItem {
    id: Int!
    name: String!
    quantity: Int!
    par: Int!
    cost: Float!
    categories: StockCategory
    createdAt: DateTime!
  }

  type Query {
    stockItems: [StockItem!]!
    stockItem(id: Int!): StockItem!
  }

  input CreateStockItemInput {
    name: String!
    quantity: Int!
    par: Int!
    cost: Float!
  }

  input UpdateStockItemInput {
    name: String
    quantity: Int
    par: Int
    cost: Float
  }

  type Mutation {
    createStockItem(input: CreateStockItemInput!): StockItem!
    updateStockItem(id: Int!, input: UpdateStockItemInput!): StockItem!
    deleteStockItem(id: Int!): StockItem!
  }
`
