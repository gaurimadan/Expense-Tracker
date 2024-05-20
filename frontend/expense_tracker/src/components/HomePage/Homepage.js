import React from 'react';
import './Homepage.css';
import MyChart from "../charts/Chart";

const Homepage = () => {
  return (
    <>
      <div className='introcontent'>
        {/* <h2 className='intropara'>MONEY MAVEN</h2> */}
      </div>

      <div className='button-container'>
        <button className='Balance'>Balance</button>
        <button className='Savings'>Savings</button>
        <button className='spent'>Expenditure</button>
      </div>

      <div className='charts'>
        <MyChart />
      </div>
    </>
  )
}

export default Homepage;
