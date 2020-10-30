import React, {useState, useEffect} from 'react'
import moment from 'moment'
import config from '../config'
import './DiscussionPost.css'
import TokenService from '../services/token-service'

const DiscussionPost = () => {

    const [messages, setMessages] = useState([])


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
        <div>
           {messages.map(message => (
               <section key={message.id}>
                   <h3>{moment(message.date).format('MMMM Do YYYY, h:mm:ss a')}</h3>
                   <p>{message.author}</p>
                   <p>{message.content}</p>
                   <button onClick={() => deletePost(message.id)}>Delete</button>
               </section>
           ))}
        </div>
    )
}
export default DiscussionPost