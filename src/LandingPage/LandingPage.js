import React from 'react'
import Header from '../Header/Header'
import './LandingPage.css'
import placeholder from './placeholder.jpg'

function LandingPage() {
    return (
        <div id='landing-page'>
            <Header />
            <div id='landing'>
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
        </div>
    )
}

export default LandingPage