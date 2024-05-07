import React from 'react'
import './Navbar.css';
import {Link} from 'react-scroll'


const Navbar = () => {
  return (
   <nav className="navbar">
   
   <div classname="desktopmenu">
   <Link className="deskMenuItem">Home</Link>
   <Link className="deskMenuItem">Analytics</Link>
   <Link className="deskMenuItem">Expenses</Link>
   <Link className="deskMenuItem">Accounts</Link>

   </div>
    
   </nav>
  )
}

export default Navbar
