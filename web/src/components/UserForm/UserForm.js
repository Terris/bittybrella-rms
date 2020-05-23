import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <FormError error={props.error} />
      <div className="field">
        <Label name="name">Name</Label>
        <TextField
          name="name"
          defaultValue={props.user?.name}
          validation={{ required: true }}
        />
        <FieldError name="name" />
      </div>
      <div className="field">
        <Label name="email">Email</Label>
        <TextField
          name="email"
          defaultValue={props.user?.email}
          validation={{ required: true }}
        />
        <FieldError name="email" />
      </div>
      <div className="field">
        <Label name="role">Role</Label>
        <TextField
          name="role"
          defaultValue={props.user?.role}
          validation={{ required: true }}
        />
        <FieldError name="role" />
      </div>
      <div className="field">
        <Submit disabled={props.loading} className="btn">
          Save
        </Submit>
      </div>
    </Form>
  )
}

export default UserForm
