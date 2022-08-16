import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import AppLayout from '../layouts/AppLayout'

const Login = lazy(() => import('../pages/Login'))
const Register = lazy(() => import('../pages/Register'))
const HomePage = lazy(() => import('../pages/Home'))

const Routes = () => {
  return (
    <Suspense fallback={<div>loading . . .</div>}>
      <Switch>
        <Route path={['/', '/register']} exact>
          <AuthLayout>
            <Route path="/" component={Login} />
            <Route path="/register" component={Register} />
          </AuthLayout>
        </Route>
        <Route path={['/home']} exact>
          <AppLayout>
            <Route path="/home" component={HomePage} />
          </AppLayout>
        </Route>
      </Switch>
    </Suspense>
  )
}

export default Routes
