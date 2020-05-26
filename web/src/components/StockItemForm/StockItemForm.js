import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

const CSS = {
  label: 'block mt-6 text-gray-700 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-700',
  input:
    'block mt-2 w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-gray-500',
  inputError:
    'block mt-2 w-full p-2 border border-red-700 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
}

const StockItemForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.stockItem?.id)
  }

  return (
    <div className="box-border text-sm -mt-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mt-4 mb-4"
          titleClassName="mt-0 font-semibold"
          listClassName="mt-2 list-disc list-inside"
        />

        <Label
          name="name"
          className={CSS.label}
          errorClassName={CSS.labelError}
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.stockItem?.name}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="name" className={CSS.errorMessage} />

        <Label
          name="quantity"
          className={CSS.label}
          errorClassName={CSS.labelError}
        >
          Quantity
        </Label>
        <TextField
          name="quantity"
          defaultValue={props.stockItem?.quantity}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="quantity" className={CSS.errorMessage} />

        <Label
          name="par"
          className={CSS.label}
          errorClassName={CSS.labelError}
        >
          Par
        </Label>
        <TextField
          name="par"
          defaultValue={props.stockItem?.par}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="par" className={CSS.errorMessage} />

        <Label
          name="cost"
          className={CSS.label}
          errorClassName={CSS.labelError}
        >
          Cost
        </Label>
        <TextField
          name="cost"
          defaultValue={props.stockItem?.cost}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="cost" className={CSS.errorMessage} />

        <div className="mt-8 text-center">
          <Submit
            disabled={props.loading}
            className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StockItemForm
