import React from 'react';
import "./Transactions.css"

const Transactions = ({ transactions }) => {
  return (
    <div className='container'>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {`${transaction.description}: $${transaction.amount.toFixed(2)}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
