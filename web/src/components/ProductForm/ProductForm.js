import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

const ProductForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.product?.id)
  }

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <FormError error={props.error} />
      <div className="field">
        <Label name="name" />
        <TextField
          name="name"
          defaultValue={props.product?.name}
          validation={{ required: true }}
        />
        <FieldError name="name" />
      </div>
      <div className="field">
        <Label name="description" />
        <TextField
          name="description"
          defaultValue={props.product?.description}
          validation={{ required: true }}
        />
        <FieldError name="description" />
      </div>
      <div className="field">
        <Label name="price" />
        <TextField
          name="price"
          defaultValue={props.product?.price}
          validation={{ required: true }}
        />
        <FieldError name="price" />
      </div>
      <div className="field">
        <Label name="cost" />
        <TextField
          name="cost"
          defaultValue={props.product?.cost}
          validation={{ required: true }}
        />
        <FieldError name="cost" />
      </div>
      <div className="field">
        <Submit disabled={props.loading} className="btn">
          Save
        </Submit>
      </div>
    </Form>
  )
}

export default ProductForm
