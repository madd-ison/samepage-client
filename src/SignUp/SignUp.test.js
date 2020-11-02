import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import SignUp from './SignUp'



it('renders the sign up component', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><SignUp /></BrowserRouter>, div)
})