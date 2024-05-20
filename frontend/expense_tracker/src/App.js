import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Chatbot from './components/ChatBot/Chatbot';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  return (
    <Router>
      <Navbar />
      <Chatbot/>
     
     </Router>
  );
}

export default App;
