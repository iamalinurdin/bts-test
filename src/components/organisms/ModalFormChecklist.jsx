import { useFormik } from "formik";
import Button from "../atoms/Button";
import Form from "../atoms/Form";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Modal from "../atoms/Modal";
import * as Yup from 'yup'
import server from "../../libs/server";

export default function ModalFormChecklist() {
  const validationSchema = Yup.object().shape({
    checklist: Yup.string().required()
  })
  const formik = useFormik({
    initialValues: {
      checklist: ''
    },
    validationSchema,
    onSubmit: async (payload) => {
      try {
        const response = await server.post('/checklist', payload)

      } catch (error) {
        alert(error.message)
      }
    }
  })

  return (
    <Modal name="form_modal_checklist">
      <Form>
        <Label label="Checklist">
          <Input name="checklist" placeholder="input your checklist..." />
        </Label>
        <Button type="submit">Save</Button>
      </Form>
    </Modal>
  )
}