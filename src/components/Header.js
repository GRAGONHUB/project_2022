import { useHistory } from 'react-router-dom'

const Header = ({ children }) => {
  const history = useHistory()

  return (
    <>
      <div class="navbar bg-base-100 shadow-xl">
        <div class="navbar-start">
          <div class="dropdown"></div>
          <button class="btn btn-ghost normal-case text-xl">GRAGON</button>
        </div>

        <div class="navbar-end">
          <button class="btn mr-2" onClick={() => history.push('/')}>
            Login
          </button>
          <button class="btn btn-primary mr-5" onClick={() => history.push('/register')}>
            Sign up
          </button>
        </div>
      </div>
      {children}
    </>
  )
}

export default Header
