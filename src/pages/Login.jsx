import Form from "../components/atoms/Form";
import Input from "../components/atoms/Input";
import Label from "../components/atoms/Label";
import * as Yup from "yup"
import { useFormik } from "formik";
import Button from "../components/atoms/Button";
import Card from "../components/atoms/Card";
import server from "../libs/server";
import TextError from "../components/atoms/TextError";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

export default function Login() {
  const dispatch = useDispatch()
  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  })
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (payload) => {
      try {
        const response = await server.post('/login', payload)
        const { data } = response.data

        dispatch(login({ token: data.token }))
      } catch (error) {
        alert(error.message)
      }
    }
  })

  return (
    <Card>
      <Form handleOnSubmit={formik.handleSubmit}>
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
        <Button type="submit">Login</Button>
      </Form>
    </Card>
  )
}