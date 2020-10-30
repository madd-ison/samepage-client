import React from 'react'
import './DiscussionBoard.css'
import DiscussionPost from '../DiscussionPost/DiscussionPost'
import SubmitPost from '../SubmitPost/SubmitPost'

function DiscussionBoard() {
    return (
        <div id='discussion'>
            <SubmitPost />
            <DiscussionPost />
        </div>
    )
}
export default DiscussionBoard