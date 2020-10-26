import React, {useState} from 'react'
import './SignUp.css'

function SignUp() {
    // const [name, setName] = useState('')
    // const [password, setPassword] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        try {

        } catch (err) {
            console.error(err.message)
        }
        window.location = '/:id'
    }
    return (
        <div id='signup-box'>
            <form id='signup-form' onSubmit={handleSubmit}>
                <label htmlFor='convo-name'>Name your conversation:</label>
                <br />
                    <input type='text' 
                        name='name'
                        // onChange={e => setName(e.target.value)}
                    />
                <br />
                <label htmlFor='password'>Create a password to share with your team:</label>
                <br /> 
                    <input type='text' 
                        name='password'
                        // onChange={e => setPassword(e.target.value)}
                        required
                    />
                <br />
                <button type='submit'>Start Planning!</button>
            </form>
        </div>
    )
}
export default SignUp