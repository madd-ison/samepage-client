import React, {useState} from 'react'
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service'
import './Login.css'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggingIn, setLoggingIn] = useState(false)

    const handleSubmitJwtAuth = async e => {
      e.preventDefault()
      try {
          const {username, password} = e.target
          AuthApiService.postLogin({
            username: username.value,
            password: password.value,
        })
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                window.location = '/messages'
            })
            setLoggingIn(true)
      } catch (err) {
        console.error(err.message)
      } 
    }
    return (
        <section className='login-form'>
        <form onSubmit={handleSubmitJwtAuth}>
        <div>
            <label htmlFor='username'>
                Username: 
                <input 
                    type="text" 
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required 
                    />
            </label>
            </div>
            <div>
            <label htmlFor='password'>
                Password: 
                <input 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required/>
            </label>
            </div>
            <button type='submit'>Login</button>
      </form>
      {loggingIn ? 
        <svg width="500px" height="500px" viewBox="0 0 500 500">
            <rect x="250" y="250" width="50" height="50" fill="rgb(243, 243, 161)">
        <animateTransform attributeName="transform" type="rotate" begin="0s" dur="10s" from="0 200 200" to="360 400 400" repeatCount="indefinite" />
        </rect>
        </svg>  : null}
      </section>
    )
}
export default Login