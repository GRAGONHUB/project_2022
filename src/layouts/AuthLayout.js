import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'

const AuthLayout = ({ children }) => (
  <>
    <Header />
    <div>{children}</div>
  </>
)

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}
export default AuthLayout
