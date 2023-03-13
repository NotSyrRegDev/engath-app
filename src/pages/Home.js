import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {

   

  return (
    <div className='main_center mt-3' >

  <h1 className='section_headline_big' > اختر حدث </h1>

    <div className="actions_main_div">

    <Link to="/report-case" >

   
      <div className="single_action_div">
    
      <img src="/images/icons/report.png" alt="" className="single_action_img" />
      <h1 className="headline_info"> الابلاغ عن حالة  </h1>

      </div>

      </Link>


      <Link to="/emergancy-report" >
      <div className="single_action_div">

      <img src="/images/icons/emergency-call.png" alt="" className="single_action_img" />
      <h1 className="headline_info"> الابلاغ عن حالة حرجة </h1>

      </div>
      </Link>

      <Link to="/map" >
      <div className="single_action_div">

      <img src="/images/icons/location-pin.png" alt="" className="single_action_img" />
      <h1 className="headline_info">  رؤية الحالات على الخريطة </h1>

      </div>

      </Link> 

      <Link to="/chatbot" >
      <div className="single_action_div">

      <img src="/images/icons/robot.png" alt="" className="single_action_img" />
      <h1 className="headline_info">     الدخول على الشات بوت </h1>

      </div>

      </Link> 

    </div>

    </div>
  )
}

export default Home