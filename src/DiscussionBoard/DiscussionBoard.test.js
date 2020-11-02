import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import DiscussionBoard from './DiscussionBoard'

it('renders the message board without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><DiscussionBoard /></BrowserRouter>, div)
})