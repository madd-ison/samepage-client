import React from 'react'
import {Switch, Link} from 'react-router-dom'
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import SignUp from '../SignUp/SignUp';
import DiscussionBoard from '../DiscussionBoard/DiscussionBoard'
import Login from '../Login/Login'
import PrivateRoute from '../utils/PrivateRoute'
import PublicRoute from '../utils/PublicRoute'
import TokenService from '../services/token-service'
import Logout from '../Logout/Logout'
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <main>
      <div className='login'>
      {TokenService.hasAuthToken() ? 
        <Logout /> : <Link to='/login'><button>Log In</button></Link>}
      </div>
      <div className='header'>
        {TokenService.hasAuthToken() ? 
        <Header /> : null}
      </div>
        <Switch>
          <PublicRoute exact path='/' component={LandingPage}/>
          <PublicRoute exact path='/signup' component={SignUp}/>
          <PublicRoute exact path='/login' component={Login} />
          <PrivateRoute exact path='/messages' component={DiscussionBoard}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
