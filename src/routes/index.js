import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import AppLayout from '../layouts/AppLayout'

const Login = lazy(() => import('../pages/Login'))
const Register = lazy(() => import('../pages/Register'))
const HomePage = lazy(() => import('../pages/Home'))
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
      <Switch>
        <Route path={['/home']}>
          <AppLayout>
            <Route exact path="/home">
              <HomePage />
            </Route>
          </AppLayout>
        </Route>
      </Switch>
    </Suspense>
  )
}

export default Routes
