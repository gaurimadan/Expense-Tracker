import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Expenses from '../expenses/Expenses';

// import Analytics from './Analytics';
// import Expenses from './Expenses';
// import Accounts from './Accounts';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleItemClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Expenses':
        return <Expenses />;
    //   case 'Analytics':
    //     return <Analytics />;
    //   case 'Expenses':
    //     return <Expenses />;
    //   case 'Accounts':
    //     return <Accounts />;
    //   default:
    //     return null;
     }
  };

  return (
    <nav className="navbar">
      <div className="desktopmenu">
        <Link className="deskMenuItem" onClick={() => handleItemClick('Home')}>Home</Link>
        <Link className="deskMenuItem" onClick={() => handleItemClick('Analytics')}>Analytics</Link>
        <Link className="deskMenuItem" onClick={() => handleItemClick('Expenses')}>Expenses</Link>
        <Link className="deskMenuItem" onClick={() => handleItemClick('Accounts')}>Accounts</Link>
      </div>
      {renderContent()}
    </nav>
  );
}

export default Navbar;
