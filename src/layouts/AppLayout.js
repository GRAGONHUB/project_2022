import React from 'react'
import PropTypes from 'prop-types'

const AppLayout = ({ children }) => <div style={{ backgroundColor: 'red' }}>{children}</div>

AppLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}
export default AppLayout
