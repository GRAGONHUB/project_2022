import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({ children }) => {
  const history = useHistory()

  return (
    <>
      <div className="navbar bg-base-100 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown" />
          <button className="btn btn-ghost normal-case text-xl">GRAGON</button>
        </div>

        <div className="navbar-end">
          <button className="btn mr-2" onClick={() => history.push('/')}>
            Login
          </button>
          <button className="btn btn-primary mr-5" onClick={() => history.push('/register')}>
            Sign up
          </button>
        </div>
      </div>
      {children}
    </>
  )
}

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default Header
