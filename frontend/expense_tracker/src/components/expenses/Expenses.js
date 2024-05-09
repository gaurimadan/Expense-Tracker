import React, { useState } from 'react';
import "./Expenses.css";
const Expenses = () => {
	const [balance, setBalance] = useState(0);
	const [transactions, setTransactions] = useState([]);
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('');

	const addExpense = () => {
		const parsedAmount = parseFloat(amount);

		if (isNaN(parsedAmount) || parsedAmount <= 0) {
			alert('Please enter a valid amount.');
			return;
		}

		// Update balance
		setBalance(
			(prevBalance) => prevBalance + parsedAmount);

		// Add transaction to the list
		setTransactions((prevTransactions) => [
			...prevTransactions,
			{ description, amount: parsedAmount },
		]);

		// Clear form
		setDescription('');
		setAmount('');
	};

	return (
		<div className="container">
			
			<div className="balance">
				<h2>
					Balance: Rs
					<span id="balance">
						{balance.toFixed(2)}
					</span>
				</h2>
			</div>
		
			<div className="add-expense">
				
				<form>
					<label htmlFor="description">
						Description:
					</label>
					<input
						type="text"
						id="description"
						value={description}
						onChange={
							(e) =>
								setDescription(e.target.value)
						}
						required
					/>
					<label htmlFor="amount">
						Amount:
					</label>
					<input
						type="number"
						id="amount"
						step="0.01"
						value={amount}
						onChange={
							(e) =>
								setAmount(e.target.value)
						}
						required
					/>
					<button type="button"
						onClick={addExpense}>
						Add Expense
					</button>
				</form>
			</div>
		</div>
	);
};

export default Expenses;
