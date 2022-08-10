import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'

const AppLayout = ({ children }) => {
  return <div style={{ backgroundColor: 'red' }}>{children}</div>
}

AppLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}
export default AppLayout
