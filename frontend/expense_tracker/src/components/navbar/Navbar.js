import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Expenses from '../expenses/Expenses';
import Transactions from '../Transactions/Transactions';
import Homepage from '../HomePage/Homepage';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const handleItemClick = (option) => {
    setSelectedOption(option);
  };

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Expenses':
        return <Expenses addTransaction={addTransaction} />;
      case 'Transactions':
        return <Transactions transactions={transactions} />;
      case 'Home':
        return <Homepage />;
      // other cases...
      default:
        return null;
    }
  };

  return (
    <nav className="navbar">
      <div className="desktopmenu">
        <NavLink className="deskMenuItem" to="/" onClick={() => handleItemClick('Home')}>Home</NavLink>
        <NavLink className="deskMenuItem" to="/transactions" onClick={() => handleItemClick('Transactions')}>Transactions</NavLink>
        <NavLink className="deskMenuItem" to="/expenses" onClick={() => handleItemClick('Expenses')}>Expenses</NavLink>
        <NavLink className="deskMenuItem" to="/accounts" onClick={() => handleItemClick('Accounts')}>Accounts</NavLink>
      </div>
      {renderContent()}
    </nav>
  );
};

export default Navbar;
