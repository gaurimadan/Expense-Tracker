import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Expenses from '../expenses/Expenses';
import Transactions from '../Transactions/Transactions';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const handleItemClick = (option) => {
    setSelectedOption(option);
  };

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction
    ]);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Expenses':
        return <Expenses addTransaction={addTransaction} />;
      case 'Transactions':
        return <Transactions transactions={transactions} />;
      // other cases...
      default:
        return null;
    }
  };

  return (
    <nav className="navbar">
      <div className="desktopmenu">
        <Link className="deskMenuItem" onClick={() => handleItemClick('Home')}>Home</Link>
        <Link className="deskMenuItem" onClick={() => handleItemClick('Transactions')}>Transactions</Link>
        <Link className="deskMenuItem" onClick={() => handleItemClick('Expenses')}>Expenses</Link>
        <Link className="deskMenuItem" onClick={() => handleItemClick('Accounts')}>Accounts</Link>
      </div>
      {renderContent()}
    </nav>
  );
}

export default Navbar;
