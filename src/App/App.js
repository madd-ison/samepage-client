import React, { useState } from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import SignUp from '../SignUp/SignUp';
import DiscussionBoard from '../DiscussionBoard/DiscussionBoard'
import SignIn from '../SignIn/SignIn'

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/:id' component={DiscussionBoard}/>
          <Route exact path='/signin' component={SignIn}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
