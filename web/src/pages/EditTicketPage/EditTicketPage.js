import TicketsLayout from 'src/layouts/TicketsLayout'
import EditTicketCell from 'src/components/EditTicketCell'

const EditTicketPage = ({ id }) => {
  return (
    <TicketsLayout>
      <EditTicketCell id={id} />
    </TicketsLayout>
  )
}

export default EditTicketPage
