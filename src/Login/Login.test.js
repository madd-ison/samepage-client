import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import Login from './Login'



it('renders the Login component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><Login /></BrowserRouter>, div)
})