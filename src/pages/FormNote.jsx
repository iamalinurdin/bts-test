import { useFormik } from "formik";
import * as Yup from 'yup'
import server from "../libs/server";
import Form from "../components/atoms/Form";
import Label from "../components/atoms/Label";
import Input from "../components/atoms/Input";
import TextError from "../components/atoms/TextError";
import Button from "../components/atoms/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function FormNote() {
  const navigate = useNavigate()
  const params = useParams()
  const validationSchema = Yup.object().shape({
    itemName: Yup.string().required()
  })
  const formik = useFormik({
    initialValues: {
      itemName: ''
    },
    validationSchema,
    onSubmit: async (payload) => {
      try {
        if (params.noteId) {
          await server.put(`/checklist/${params.id}/item/rename/${params.noteId}`, payload)
        } else {
          await server.post(`/checklist/${params.id}/item`, payload)
          formik.resetForm()
        }

        navigate('/')
      } catch (error) {
        alert(error.message)
      }
    }
  })
  const fetchNote = async () => {
    try {
      if (params.noteId) {
        const response = await server.get(`/checklist/${params.id}/item/${params.noteId}`)
        const { data } = response.data

        formik.setFieldValue('itemName', data.name)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    fetchNote()
  }, [])

  return (
    <Form handleOnSubmit={formik.handleSubmit}>
      <Label label="Note">
        <Input
          name="itemName"
          placeholder="input your note..."
          value={formik.values.itemName}
          handleOnChange={formik.handleChange}
        />
        {(formik.errors.itemName && formik.touched.itemName) ? (
          <TextError>{formik.errors.itemName}</TextError>
        ) : null}
      </Label>
      <Button type="submit">Save</Button>
    </Form>
  )
}