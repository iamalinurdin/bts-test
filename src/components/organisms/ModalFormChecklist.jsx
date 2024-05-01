import { useFormik } from "formik";
import Button from "../atoms/Button";
import Form from "../atoms/Form";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Modal from "../atoms/Modal";
import * as Yup from 'yup'
import server from "../../libs/server";
import TextError from "../atoms/TextError";

export default function ModalFormChecklist() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required()
  })
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema,
    onSubmit: async (payload) => {
      try {
        const response = await server.post('/checklist', payload)

        console.log(response)
      } catch (error) {
        alert(error.message)
      }
    }
  })

  return (
    <Modal name="form_modal_checklist">
      <Form handleOnSubmit={formik.handleSubmit}>
        <Label label="Checklist">
          <Input
            name="name"
            placeholder="input your checklist..."
            value={formik.values.name}
            handleOnChange={formik.handleChange}
          />
          {(formik.errors.name && formik.touched.name) ? (
            <TextError>{formik.errors.name}</TextError>
          ) : null}
        </Label>
        <Button type="submit">Save</Button>
      </Form>
    </Modal>
  )
}