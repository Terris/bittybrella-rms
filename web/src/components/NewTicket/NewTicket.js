import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import TicketForm from 'src/components/TicketForm'

const CREATE_TICKET_MUTATION = gql`
  mutation CreateTicketMutation($input: CreateTicketInput!) {
    createTicket(input: $input) {
      id
    }
  }
`

const NewTicket = () => {
  const [createTicket, { loading, error }] = useMutation(
    CREATE_TICKET_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.tickets())
      },
    }
  )

  const onSave = (input) => {
    input.settled = input.settled === 'true' ? true : false
    createTicket({ variables: { input } })
  }

  return (
    <>
      <h2 className="text-sm font-semibold">New Ticket</h2>
      <TicketForm onSave={onSave} loading={loading} error={error} />
    </>
  )
}

export default NewTicket
