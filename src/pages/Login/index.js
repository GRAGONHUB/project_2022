import React from 'react'
import { Form, TextInput, SubmitButton } from '../../components/Form'
import Card from '../../components/Card'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
})

const Home = () => {
  const history = useHistory()
  const handleSubmit = (value) => {
    console.log(value)
    history.push('/home')
  }
  return (
    <div class="hero min-h-screen card-body">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <h1 class="text-4xl font-bold hero-content text-center">Login</h1>
            <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
              <TextInput name="email" label="Email" />
              <TextInput name="password" label="Password" type="password" />
              <SubmitButton>Login</SubmitButton>
            </Form>
          </div>
        </div>
        <div class="divider lg:divider-horizontal">OR</div>
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-3xl font-bold py-5">Don't have an account?</h1>
            <div class="form-control">
              <button class="btn btn-primary " onClick={() => history.push('/register')}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
