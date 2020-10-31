import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'
import pic from '../img/example.png'

function LandingPage() {
    return (
            <div id='landing'>
                <h2>Make sure you're on the</h2>
                <h1 id='samepage'>samePage.</h1>
                    <h4>Free & easy. Start your group discussion now:</h4>
                    <Link to='/signup'><button>START YOUR PAGE</button></Link>
                    <Link to='/login'><button id='login-btn'>Log In</button></Link>
                    <section id='example'>
                        <div id='ex-text'>
                            <h1>Projects, vacations, evenings, <i>anything</i>.</h1>
                        </div>
                        <div id='ex-img'>
                            <img src={pic} alt='placeholder' />
                        </div>
                    </section>
            </div>
    )
}

export default LandingPage