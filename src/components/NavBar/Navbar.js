import React from 'react'
import AppYardLogo from '../assests/App yard logo.png'
import phonepng from '../assests/phone.png'
import Line from '../assests/Line 1.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar-permanent">
        <div className='navbar-logo'><img src={AppYardLogo} alt="Logo" /></div>
        <div className='navbar-buttons'>
          <button style={{width:120 }}>Home</button>
          <button>Services   </button>
          <button>Why choose us ?</button>
          <button style={{marginLeft:20 }}>How it works ?</button>
        </div>
        <div className="quote">
            <img src={phonepng} alt="call" className='phonepng'/>
            <img src={Line} alt="call" className='line'/>
            <button className='quote-button'>Get a Quote</button>

        </div>

    </div>
  )
}

export default Navbar