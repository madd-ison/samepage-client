import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Logout from './Logout';



it('renders the Logout component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Logout /></BrowserRouter>, div);
});