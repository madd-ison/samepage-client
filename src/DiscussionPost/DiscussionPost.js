import React from 'react'
import './DiscussionPost.css'

function DiscussionPost(props) {
    // handle delete
    return (
        <div id='post'>
            <h2>{props.user === null ? null : props.user}</h2>
            <p>{props.message}</p>
            <button id='delete'>Delete</button>
        </div>
    )
}
export default DiscussionPost