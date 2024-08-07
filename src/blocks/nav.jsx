import React, { useState } from 'react';
import logo from '/icon/Logo.svg'
import Nav_btn from '/icon/Nav-btn.svg'



const Nav = ({toggleMobileMenu}) => {

    
    return ( 
        <>
        <nav className="nav">
            <a href="#" className="nav_logo">
                <img src={logo} alt="logo" />
            </a>


            <div className="nav_list">
                <ul>
                    <li> <a href="#">Destinations</a></li>
                    <li> <a href="#">Activities</a></li>
                    <li> <a href="#">About Us</a></li>
                    <li> <a href="#">Contact</a></li>
                    
                </ul>
            </div>

            <div className="nav_mobile-nav">
                <button onClick={toggleMobileMenu} className='nav-btn'>
                    <img className='N_btn' src={Nav_btn} alt="Nav-btn" />
                </button>
            </div>
        </nav>
        
        </>
     );
}
 
export default Nav;