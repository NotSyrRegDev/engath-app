import React from 'react';
import { Link } from 'react-router-dom';
import './GetStarted.css';


const GetStarted = () => {
  return (
    <div className='main_get_started ' >
            <img src="/images/icons/logo-transparent.png" alt="" />

          <Link to="/home" >
          <button className="btn engath_btn"> بدء الاستخدام </button>
          </Link>
           
    </div>
  )
}

export default GetStarted