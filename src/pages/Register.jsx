import Form from "../components/atoms/Form";
import Input from "../components/atoms/Input";
import Label from "../components/atoms/Label";
import * as Yup from "yup"
import { useFormik } from "formik";
import Button from "../components/atoms/Button";
import Card from "../components/atoms/Card";
import server from "../libs/server";
import { useNavigate } from "react-router-dom";
import TextError from "../components/atoms/TextError";

export default function Register() {
  const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required()
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (payload) => {
      try {
        const response = await server.post('/register', payload)

        if (response.status == 200) {
          navigate('/login')
        }
      } catch (error) {
        alert(error.message)
      }
    }
  })

  return (
    <Card>
      <Form handleOnSubmit={formik.handleSubmit}>
        <Label label="Email">
          <Input
            type="email"
            name="email"
            value={formik.values.email}
            handleOnChange={formik.handleChange}
          />
          {(formik.errors.email && formik.touched.email) ? (
            <TextError>{formik.errors.email}</TextError>
          ) : null}
        </Label>
        <Label label="Username">
          <Input
            name="username"
            value={formik.values.username}
            handleOnChange={formik.handleChange}
          />
          {(formik.errors.username && formik.touched.username) ? (
            <TextError>{formik.errors.username}</TextError>
          ) : null}
        </Label>
        <Label label="Password">
          <Input
            type="password"
            name="password"
            value={formik.values.password}
            handleOnChange={formik.handleChange}
          />
          {(formik.errors.password && formik.touched.password) ? (
            <TextError>{formik.errors.password}</TextError>
          ) : null}
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </Card>
  )
}