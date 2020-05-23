export const schema = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    role: Role!
    createdAt: DateTime!
  }

  enum Role {
    USER
    ADMIN
  }

  type Query {
    users: [User!]!
    user(id: Int!): User!
  }

  input CreateUserInput {
    name: String!
    email: String!
    role: Role!
  }

  input UpdateUserInput {
    name: String
    email: String
    role: Role
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
