import React from 'react'
import { Form, TextInput, SubmitButton } from '../../components/Form'
import Card from '../../components/Card'
const Register = () => {
  const handleSubmit = (value) => {
    console.log(value)
  }
  return (
    <div class="hero min-h-screen card-body">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Sign up now!</h1>
          <p class="py-6">Already have an account?</p>
          <div class="form-control">
            <button class="btn ">Log in</button>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input type="text" placeholder="username" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Confirm Password</span>
              </label>
              <input type="text" placeholder="Confirm Password" class="input input-bordered" />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
