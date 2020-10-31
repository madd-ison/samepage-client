import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Header from './Header';



it('renders the header', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div);
});