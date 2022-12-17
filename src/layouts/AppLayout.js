import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'

const user = { image: 'https://placeimg.com/80/80/people' }

const AppLayout = ({ children }) => (
  <>
    <Header user={user} />
    <div className="py-4 px-4">{children}</div>
  </>
)

AppLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}
export default AppLayout
