import React from 'react'

function SignIn() {
    // validate creds
    return (
        <div>
            <h1>Please enter the password to continue:</h1>
            <label htmlFor='password' />
            <input type='password' />
        </div>
    )
}

export default SignIn