import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import SubmitPost from './SubmitPost';



it('renders the submit component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><SubmitPost /></BrowserRouter>, div);
});