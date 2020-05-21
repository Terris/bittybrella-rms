import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import TicketForm from 'src/components/TicketForm'

export const QUERY = gql`
  query FIND_TICKET_BY_ID($id: Int!) {
    ticket: ticket(id: $id) {
      id
      settled
      createdAt
    }
  }
`
const UPDATE_TICKET_MUTATION = gql`
  mutation UpdateTicketMutation($id: Int!, $input: UpdateTicketInput!) {
    updateTicket(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div className="loader">Loading...</div>

export const Success = ({ ticket }) => {
  const [updateTicket, { loading, error }] = useMutation(
    UPDATE_TICKET_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.tickets())
      },
    }
  )

  const onSave = (input, id) => {
    input.settled = input.settled === 'true' ? true : false
    updateTicket({ variables: { id, input } })
  }

  return (
    <>
      <h2>Edit Ticket {ticket.id}</h2>
      <TicketForm
        ticket={ticket}
        onSave={onSave}
        error={error}
        loading={loading}
      />
    </>
  )
}
