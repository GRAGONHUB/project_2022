import React from 'react'
import { Form, TextInput, SubmitButton } from '../../components/Form'
import Card from '../../components/Card'
import * as yup from 'yup'

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
})

const Home = () => {
  const handleSubmit = (value) => {
    console.log(value)
  }
  return (
    <div class="hero min-h-screen card-body">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">Don't have an account?</p>
          <div class="form-control">
            <button class="btn ">Sign up</button>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
              <TextInput name="email" label="Email" />
              <TextInput name="password" label="Password" type="password" />
              <SubmitButton>Login</SubmitButton>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
