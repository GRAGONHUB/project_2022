import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

const Header = ({ user }) => {
  const history = useHistory()
  return (
    <div className="navbar bg-base-100 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown" />
        <button className="btn btn-ghost normal-case text-xl">GRAGON</button>
      </div>

      {isEmpty(user) ? (
        <div className="navbar-end">
          <button className="btn mr-2" onClick={() => history.push('/')}>
            Login
          </button>
          <button className="btn btn-primary mr-5" onClick={() => history.push('/register')}>
            Sign up
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.image} alt="profile-logo" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.object,
}

Header.defaultProps = {
  user: {},
}

export default Header
