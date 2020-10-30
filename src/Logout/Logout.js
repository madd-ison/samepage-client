import React from 'react'
import TokenService from '../services/token-service'

function Logout() {
    const handleLogoutClick = () => {
        TokenService.clearAuthToken()
        window.location = '/'
    }
return <button id='log-out' onClick={handleLogoutClick}>Logout</button>
}

export default Logout