import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
    <header>
        <div className="overlay">
            <h1>Make sure you're</h1>
            <h1>all on the samePage.</h1>
            <br />
            <h2>Free & easy. Password-protected pages for ultimate group discussions.</h2>
        <Link to='/signup'><button>START YOUR PAGE</button></Link>

        </div>
    </header> 
    )
}

export default Header