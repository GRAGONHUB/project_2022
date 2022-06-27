import React from 'react'
import { Form, TextInput, SubmitButton } from '../../components/Form'
import Card from '../../components/Card'
const Home = () => {
  const handleSubmit = (value) => {
    console.log(value)
  }
  return (
    <div className="flex justify-center max-w-sm">
      <Card>
        <Form onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Login</h5>
          <TextInput name="email" label="Email"></TextInput>
          <TextInput name="password" label="Password"></TextInput>
          <SubmitButton>login</SubmitButton>
        </Form>
      </Card>
    </div>
  )
}

export default Home
