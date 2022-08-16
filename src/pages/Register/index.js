import React from 'react'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { Form, TextInput, SubmitButton } from '../../components/Form'

const validationSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
})

const Register = () => {
  const handleSubmit = () => {}
  const history = useHistory()
  return (
    <div className="hero min-h-screen card-body">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl font-bold hero-content text-center">Sign Up</h1>
            <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
              <TextInput name="username" label="Username" />
              <TextInput name="email" label="Email" />
              <TextInput name="password" label="Password" type="password" />
              <TextInput name="password" label="Confirm Password" type="password" />
              <SubmitButton>Sign up</SubmitButton>
            </Form>
          </div>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold py-5">Already have an account?</h1>
            <div className="form-control">
              <button className="btn btn-primary " onClick={() => history.push('/')}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
