import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import DiscussionPost from './DiscussionPost'


it('renders posts!', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><DiscussionPost /></BrowserRouter>, div)
})