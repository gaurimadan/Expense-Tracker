import React, { useState } from 'react';
import "./Expenses.css"
const Expenses = ({ addTransaction }) => {
  const [balance, setBalance] = useState(0);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    // Validate input
	const parsedAmount = parseFloat(amount);
    if (!description.trim() || !amount.trim()) {
      alert('Please enter a description and amount.');
      return;
    }

    // Add expense
    addTransaction({
      description: description.trim(),
      amount: parseFloat(amount.trim())
    });

	setBalance(
		(prevBalance) => prevBalance + parsedAmount);

    // Clear form
    setDescription('');
    setAmount('');
  };

  return (
	
    <div className='container'>
	
      <h2>Expenses</h2>
	  <div className="balance">
                <h2>
                    Expenditure: Rs 
                    <span id="balance">
                        {balance.toFixed(2)}
                    </span>
                </h2>
            </div>
      <form onSubmit={(e) => { e.preventDefault(); handleAddExpense(); }}>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default Expenses;
