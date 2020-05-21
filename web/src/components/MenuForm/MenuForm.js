import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

const MenuForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.menu?.id)
  }

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <FormError error={props.error} />
      <div className="field">
        <Label name="name" />
        <TextField
          name="name"
          defaultValue={props.menu?.name}
          validation={{ required: true }}
        />
        <FieldError name="name" />
      </div>
      <div className="field">
        <Label name="description" />
        <TextField
          name="description"
          defaultValue={props.menu?.description}
          validation={{ required: true }}
        />
        <FieldError name="description" />
      </div>
      <div className="field">
        <Submit disabled={props.loading} className="btn">
          Save
        </Submit>
      </div>
    </Form>
  )
}

export default MenuForm
