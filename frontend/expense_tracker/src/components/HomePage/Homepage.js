import React from 'react'
import './Homepage.css';
import MyChart from "../charts/Chart";



const Homepage = () => {
  return (
    <section id='Intro'>
    <div className='introcontent'>
       
        <MyChart/>
        <p className='intropara'>Expense Tracking for those<br/> who value money</p>
        
    </div>
    <img src='' alt='' className='bg'/>
    </section>
  )
}

export default Homepage
