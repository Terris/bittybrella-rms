export const schema = gql`
  type Menu {
    id: Int!
    name: String!
    description: String!
    createdAt: DateTime!
  }

  type Query {
    menus: [Menu!]!
    menu(id: Int!): Menu!
  }

  input CreateMenuInput {
    name: String!
    description: String!
  }

  input UpdateMenuInput {
    name: String
    description: String
  }

  type Mutation {
    createMenu(input: CreateMenuInput!): Menu!
    updateMenu(id: Int!, input: UpdateMenuInput!): Menu!
    deleteMenu(id: Int!): Menu!
  }
`
