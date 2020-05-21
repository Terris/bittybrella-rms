import TicketsLayout from 'src/layouts/TicketsLayout'
import TicketCell from 'src/components/TicketCell'

const TicketPage = ({ id }) => {
  return (
    <TicketsLayout>
      <TicketCell id={id} />
    </TicketsLayout>
  )
}

export default TicketPage
