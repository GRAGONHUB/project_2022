import React from 'react'
import { Form, TextInput, SubmitButton } from '../../components/Form'
const Home = () => {
  const handleSubmit = (value) => {
    console.log(value)
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <TextInput name="email"></TextInput>
        <SubmitButton></SubmitButton>
      </Form>
    </div>
  )
}

export default Home
