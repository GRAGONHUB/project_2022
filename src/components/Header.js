import { useHistory } from 'react-router-dom'

const Header = ({ children }) => {
  const history = useHistory()

  return (
    <>
      <div class="navbar bg-base-100 shadow-xl">
        <div class="navbar-start">
          <div class="dropdown"></div>
          <a class="btn btn-ghost normal-case text-xl">GRAGON</a>
        </div>

        <div class="navbar-end">
          <a class="btn mr-2">Log in</a>
          <a class="btn mr-5">Sign up</a>
        </div>
      </div>
      {children}
    </>
  )
}

export default Header
