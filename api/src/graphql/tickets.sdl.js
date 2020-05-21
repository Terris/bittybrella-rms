export const schema = gql`
  type Ticket {
    id: Int!
    settled: Boolean!
    products: Product
    createdAt: DateTime!
  }

  type Query {
    tickets: [Ticket!]!
    ticket(id: Int!): Ticket!
  }

  input CreateTicketInput {
    settled: Boolean!
  }

  input UpdateTicketInput {
    settled: Boolean
  }

  type Mutation {
    createTicket(input: CreateTicketInput!): Ticket!
    updateTicket(id: Int!, input: UpdateTicketInput!): Ticket!
    deleteTicket(id: Int!): Ticket!
  }
`
