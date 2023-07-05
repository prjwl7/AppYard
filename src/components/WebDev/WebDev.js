import React from 'react'
import './WebDev.css'

import manWebsite from '../assests/man-website.png'
import Reactimg from '../assests/react 1.png'
import cssimg from '../assests/css 1.png'
import htmlimg from '../assests/html-5 1.png'

import { useNavigate } from 'react-router-dom'

const WebDev = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/scrollbarWebDev');
      };

  return (
    <div className="webContainer">
            <div className="mobile-image">
                <img src={manWebsite} alt="image mobile" className='image-mobile' />
            </div>
            <div className="mobile-content">
                <div className='mobile-content-1'>Website Development</div>
                <div className='mobile-content-2'>That Deliver a tangible business result</div>
                <div className='mobile-content-3'>
                    <ul>
                        <li>We help our clients navigate the ever changing digital landscape with a blend of creativity and practical business experience</li>
                        <li>Our team focused approach keeps the focus on customers, and we create custom web solution that meets your individual business need</li>
                    </ul>
                </div>
                <div>
                    <button className='mobile-knowMore' onClick={handleButtonClick} >Know more</button>
                </div>
            </div>
            <div className='div-html'><img src={htmlimg} alt=""  className='star1'/></div>
            <div className='div-css'><img src={cssimg} alt="" className='star2'/></div>
            <div className='div-react'><img src={Reactimg} alt="" className='star3'/></div>
        </div>
  )
}

export default WebDev