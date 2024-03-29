import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import history from './routerHistory'
import Routes from './routes'

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  )
}

export default App
