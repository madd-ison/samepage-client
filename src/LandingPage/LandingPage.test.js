import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import LandingPage from './LandingPage'



it('renders the landing page', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><LandingPage /></BrowserRouter>, div)
})