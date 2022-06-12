import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'

const Login = lazy(() => import('../pages/Login'))
const Register = lazy(() => import('../pages/Register'))
// const Withdraw = lazy(() => import('../pages/Withdraw'))
const Routes = () => {
  return (
    <Suspense fallback={<div>loading . . .</div>}>
      <Switch>
        <Route path={['/', '/register']}>
          <AuthLayout isLogin={true}>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </AuthLayout>
        </Route>
      </Switch>
    </Suspense>
  )
}

export default Routes
