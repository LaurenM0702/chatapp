import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ChatPage = () => {

  const [chats, setChats] = useState([])

  const fetchChats = async() => {
    const {data} = await axios.get("http://localhost:3000/chats");
    setChats(data)
  }

  useEffect(() => {
    fetchChats()
  }, [])

  return (
    <div className='flex flex-col gap-5'>
      {chats.map(chat => (
        <div key={chat.id}>
          <h1>{chat.name}</h1>
          <p>{chat.messages[0].text}</p>
        </div>
      ))}
    </div>
  )
}

export default ChatPage