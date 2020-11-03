import React, {useState} from 'react'
import config from '../config'
import './SubmitPost.css'
import TokenService from '../services/token-service'

const SubmitPost = () => {
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')

    const onSubmitForm = async(e) => {
        e.preventDefault()
        try {
            const newMessage = {content, author}
            if(!content) {
                alert('You forgot to type your message!')
            }
            await fetch(`${config.API_ENDPOINT}/api/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'authorization': `bearer ${TokenService.getAuthToken()}`,
                    },
                body: JSON.stringify(newMessage)
            })
            window.location = '/messages'
        } catch (err) {
            console.error(err.message)
        }
    }
    return (
        <div id='post-box'>
                <form id='submit-post' onSubmit={onSubmitForm}>
                    <label htmlFor='user-name'>Your Name:</label>
                    <br />
                    <input type='text' 
                        placeholder='(optional)'
                        value={author}
                        onChange={e => setAuthor(e.target.value)} />
                    <br />
                    <label htmlFor='your-message'>Your Message:</label>
                        <textarea value={content}
                        onChange={e => setContent(e.target.value)}>
                        </textarea>
                    <br />
                    <button>Post</button>
                </form>
            </div>
    )
}

export default SubmitPost