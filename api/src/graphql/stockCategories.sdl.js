export const schema = gql`
  type StockCategory {
    id: Int!
    name: String!
    createdAt: DateTime!
    StockItem: StockItem
    stockItemId: Int
  }

  type Query {
    stockCategories: [StockCategory!]!
    stockCategory(id: Int!): StockCategory!
  }

  input CreateStockCategoryInput {
    name: String!
    stockItemId: Int
  }

  input UpdateStockCategoryInput {
    name: String
    stockItemId: Int
  }

  type Mutation {
    createStockCategory(input: CreateStockCategoryInput!): StockCategory!
    updateStockCategory(
      id: Int!
      input: UpdateStockCategoryInput!
    ): StockCategory!
    deleteStockCategory(id: Int!): StockCategory!
  }
`
