import React from 'react'
import './WebDev.css'

import manWebsite from '../assests/man-website.png'
import star2 from '../assests/starImage2.png'
const WebDev = () => {
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
                    <button className='mobile-knowMore'>Know more</button>
                </div>
            </div>
            <div className="stars-grid">
            <div className='div-star1'><img src={star2} alt=""  className='star1'/></div>
            <div className='div-star2'><img src={star2} alt="" className='star2'/></div>
            <div className='div-star3'><img src={star2} alt="" className='star3'/></div>
            </div>
            <div className='div-star4'><img src={star2} alt="" className="star4"/></div>
        </div>
  )
}

export default WebDev