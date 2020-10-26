import React from 'react'
import './SubmitPost.css'

function SubmitPost() {
    return (
        <div id='post-box'>
                <form id='submit-post'>
                    <label htmlFor='user-name'>Your Name:</label>
                    <br />
                    <input type='text' placeholder='(optional)' />
                    <br />
                    <textarea></textarea>
                    <br />
                    <button>Post</button>
                </form>
            </div>
    )
}

export default SubmitPost