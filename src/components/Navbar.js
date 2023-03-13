import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [mobileSection , setMobileSection] = useState(false);

  return (
    <div>
        <div className="iwaiter_navbar">

        {/* <div className="search_div">
            <img src="/images/icons/search.png" alt="" />
            </div> */}

            <div className="menu_div">
            <img src="/images/icons/menu-bar.png" onClick={() => setMobileSection(!mobileSection)} alt="" />
                
            </div>

            <div className="logo_div">
            <Link to="/home" >
            <img src="/images/icons/logo-transparent.png" alt="" />
            </Link>
           
            </div>

          

            
         


        </div>
        
        { /* MOBILE SECTION */}

   
      <div className={`main_mobile_section ${mobileSection ? 'active' : '' }`}>
          <img src="" alt="" />
          <ul className="mobile_ul">

            <li>
             <Link to="/home" className='active'> الرئيسية </Link>
            </li>

            <li>
             <Link to="/signUp" > تسجيل جديد </Link>
            </li>

            <li>
             <Link  to="/login" > تسجيل الدخول </Link>
            </li>

          </ul>
      </div>
   
     

        { /* END MOBILE SECTION */}
    </div>
  )
}

export default Navbar