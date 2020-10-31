import React, {useState} from 'react'
import './SignUp.css'
import AuthApiService from '../services/auth-api-service'

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSubmit = async e => {
      e.preventDefault()
      try {
        const {username, password} = e.target
        AuthApiService.postUser({
            username: username.value,
            password: password.value,
        }) 
            .then(user => {
                username.value = ''
                password.value = ''
                window.location = '/login'
            })
    } catch (err) {
        console.error(err.message)
    }
  }
    return (
        <div id='signup-box'>
            <form id='signup-form' onSubmit={handleSubmit}>
                <label htmlFor='username'>Name your conversation:</label>
                <br />
                    <input 
                        id='user-name'
                        type='text' 
                        name='username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                <br />
                <label htmlFor='password'>Create a password to share with your team:</label>
                <br /> 
                <input
                    id='user-password'
                    name='password'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    />
                <br />
                <p id='password'>Password must be 6 characters or longer and include:</p>
                <ul>
                    <li>A capital letter</li>
                    <li>A number</li>
                    <li>A special character (i.e. $!@)</li>
                </ul>
                <button type='submit'>Start Planning!</button>
            </form>
        </div>
    )
}
export default SignUp