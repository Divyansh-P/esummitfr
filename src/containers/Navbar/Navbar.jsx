import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './Navbarelements';
import { Link } from 'react-router-dom';
import p from '../../images/p5.png';
import './Navbar.css';

const Navbar = () => {
  const [show1,setshow1]=useState(false);
  const closehandler=()=>{
    setshow1(prev=>!prev);
  }
  return (
     <div>
      {!show1&&<Nav>
        <NavLink to='/'>
          <img src={p} alt='logo' style={{width:"100px"}} />
        </NavLink>
        <Bars onClick={closehandler}/>
        <NavMenu>
          <NavLink to='/' activeStyle exact>
            Home
          </NavLink>
          <NavLink to='/teams' activeStyle>
            Our Team
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/sponsers' activeStyle>
            Sponsors
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact-Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>}
      {show1&&
        <aside className={(show1?"sidebar show-sidebar":'sidebar') }  >
        <div className="sidebar-header">
          <img src={p} className="logo" alt="" />
          <div className="close-btn" onClick={closehandler}><i className="fas fa-times"></i></div>
        </div>
        <ul className="links1">
          <li>
            <Link to='/' onClick={closehandler}>home</Link>
          </li>
          <li>
            <Link to="/teams" onClick={closehandler}>our team</Link>
          </li>
          <li>
            <Link to="/events" onClick={closehandler}>events</Link>
          </li>
          <li>
            <Link to="/sponsers" onClick={closehandler}>sponsers</Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={closehandler}>contact us</Link>
          </li>
        </ul>
        <div className='social'>
        <ul className="social-icons">
          <li>
            <a href="https://www.linkedin.com/company/entrepreneurshipcellnith/" 
                    target="_blank" 
                    rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li> 
          <li>
            <a href="https://www.instagram.com/ecell_nith/" 
                    target="_blank" 
                    rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li> 
          <li>
            <a href="https://youtube.com/channel/UCGOp-u-AUwfGOqKBiEGHWJw" 
                    target="_blank" 
                    rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </li> 
          <li>
            <a href="https://twitter.com/ecellnith" 
                    target="_blank" 
                    rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li> 
          <li>
            <a href="https://www.facebook.com/eclubnith" 
                    target="_blank" 
                    rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
        </div>
      </aside>
      }
      </div>
    
  );
};

export default Navbar;
