import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'
import placeholder from './placeholder.jpg'

function LandingPage() {
    return (
            <div id='landing'>
            <h1>Make sure you're all on the samePage.</h1>
            <h2>Free and easy. Start your group discussion now:</h2>
            <Link to='/signup'><button>START YOUR PAGE</button></Link>
                <section id='demo'>
                    <h1>Plan your project,</h1>
                    <img src={placeholder} alt='placeholder' />
                </section>
                <section id='demo'>
                    <img src={placeholder} alt='placeholder' />
                    <h1>plan your vacation,</h1>
                </section>
                <section id='demo'>
                    <h1>plan <i>anything</i></h1>
                    <img src={placeholder} alt='placeholder'/>
                </section>
            </div>
    )
}

export default LandingPage