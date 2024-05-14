import React from 'react'

import Navbar from './components/navbar/Navbar';
import Chatbot from './components/ChatBot/Chatbot';
import Sidebar from './components/Sidebar/Index';



const App = () => {

  return (
    <div style={{overflow:"hidden"}}>
    
      
      <Navbar/>
      
      <Chatbot/>
      
    </div>
  )
}

export default App
