import React from 'react'
import './DiscussionBoard.css'
import DiscussionPost from '../DiscussionPost/DiscussionPost'
import SubmitPost from '../SubmitPost/SubmitPost'
import store from '../store'

function DiscussionBoard() {
    const posts = store.posts.map(post => 
        <DiscussionPost 
            key={post.id}
            user={post.user}
            message={post.message} />)
    return (
        <div id='discussion'>
            <SubmitPost />
            <div id='board'>
                {posts}
            </div>
        </div>
    )
}
export default DiscussionBoard