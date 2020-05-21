import {
  Form,
  FormError,
  FieldError,
  Label,
  HiddenField,
  CheckboxField,
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
        <CheckboxField
          name="settled"
          defaultValue={true}
          defaultChecked={props.ticket?.settled}
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
