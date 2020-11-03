import React, {useState, useEffect} from 'react'
import moment from 'moment'
import config from '../config'
import './DiscussionPost.css'
import TokenService from '../services/token-service'

const DiscussionPost = () => {

    const [messages, setMessages] = useState([])

    // delete selected post
    const deletePost = async (id) => {
        try {
            await fetch(`${config.API_ENDPOINT}/api/messages/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `bearer ${TokenService.getAuthToken()}`,
                }
            })

            setMessages(messages.filter(message => message.id !== id))
           window.location = '/messages'

        } catch (err) {
            console.error(err.message)
        }
    }

    // get all messages for id that matches logged in user id
    const getMessages = async () => {
        try {
            const response = await fetch(`${config.API_ENDPOINT}/api/messages`, {
                headers: {
                    'Authorization': `bearer ${TokenService.getAuthToken()}`,
                }
            })
            const jsonData = await response.json()

            setMessages(jsonData)

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getMessages()
    }, [])

    return (
        <div id='board'>
           {messages.map(message => (
               <section id='post' key={message.id}>
                   <p>{moment(message.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                   <h3>{message.author}</h3>
                   <p>{message.content}</p>
                   <button onClick={() => deletePost(message.id)}>Delete</button>
               </section>
           ))}
        </div>
    )
}
export default DiscussionPost