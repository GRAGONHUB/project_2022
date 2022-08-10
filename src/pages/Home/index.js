import React from 'react'
import { Form, TextInput, SubmitButton } from '../../components/Form'
import Card from '../../components/Card'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
  const history = useHistory()
  const handleSubmit = (value) => {
    console.log(value)
    history.push('/home')
  }
  return (
    <div class="hero min-h-screen bg-base-200 grid grid-cols-4 gap-4">
      <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
    </div>
  )
}

export default HomePage
