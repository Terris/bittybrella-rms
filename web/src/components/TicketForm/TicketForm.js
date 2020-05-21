import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

const TicketForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.ticket?.id)
  }

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <FormError error={props.error} />
      <div className="field">
        <Label name="settled">Settled</Label>
        <TextField
          name="settled"
          defaultValue={props.ticket?.settled}
          validation={{ required: true }}
        />
        <FieldError name="settled" />
      </div>
      <div className="field">
        <Submit disabled={props.loading} className="btn">
          Save
        </Submit>
      </div>
    </Form>
  )
}

export default TicketForm
