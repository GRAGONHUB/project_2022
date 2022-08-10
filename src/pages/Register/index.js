import React from 'react'
import { Form, TextInput, SubmitButton } from '../../components/Form'
import Card from '../../components/Card'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'

const validationSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
})

const Register = () => {
  const handleSubmit = (value) => {
    console.log(value)
  }
  const history = useHistory()
  return (
    <div class="hero min-h-screen card-body">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <h1 class="text-4xl font-bold hero-content text-center">Sign Up</h1>
            <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
              <TextInput name="username" label="Username" />
              <TextInput name="email" label="Email" />
              <TextInput name="password" label="Password" type="password" />
              <TextInput name="password" label="Confirm Password" type="password" />
              <SubmitButton>Sign up</SubmitButton>
            </Form>
          </div>
        </div>
        <div class="divider lg:divider-horizontal">OR</div>
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-3xl font-bold py-5">Already have an account?</h1>
            <div class="form-control">
              <button class="btn btn-primary " onClick={() => history.push('/')}>
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
