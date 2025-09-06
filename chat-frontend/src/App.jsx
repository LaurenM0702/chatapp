import React from 'react'
import Home from './components/Home'
import ChatPage from './components/ChatPage'
import { Routes, Route } from 'react-router'

const App = () => {

  const fetchChats = async() => {
    const res = await axios.get("http://localhost:3000/chats")
    console.log(res)
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App