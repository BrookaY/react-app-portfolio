import React from 'react';
import './index.scss'
import { Link, NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogoS from '../../assets/images/logo-s.png' 
import LogoSubtitle from '../../assets/images/logo_sub.png' 


const Sidebar = () => (
  <div classname= "nav-bar">
    <Link classname='logo' to= '/'>
      <img src={LogoS} alt="logo"/> 
      <img classname="sub-logo" src={LogoSubtitle} alt="Teacher to Student"/> 
    </Link>
    <nav>
      <NavLink extract="true" activeclassname="active" to='/'>
        {/* <FontAwesomeIcon icon={faHome} color="#4d4d4e" /> */}
      </NavLink>

      <NavLink extract="true" activeclassname="active" classname="about-link" to='/about'>
        {/* <FontAwesomeIcon icon={faUser} color="#4d4d4e" /> */}
      </NavLink>

      <NavLink extract="true" activeclassname="active" classname="contact-link" to='/contact'>
        {/* <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /> */}
      </NavLink>
    </nav>
    </div>
    )

export default Sidebar