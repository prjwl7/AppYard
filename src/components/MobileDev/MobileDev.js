import React from 'react'
import './MobileDev.css'
import starImage from '../assests/starImage.png'
import mobileImage from '../assests/MobileImage.png'
const MobileDev = () => {
  return (
    <>
        <div className="mobileContainer">
            <div className="mobile-image">
                <img src={mobileImage} alt="image mobile" className='image-mobile' />
            </div>
            <div className="mobile-content">
                <div className='mobile-content-1'>Mobile App Development</div>
                <div className='mobile-content-2'>To boost your company expansion</div>
                <div className='mobile-content-3'>
                    <ul>
                        <li>We provide services ranging from design to development and maintenance</li>
                        <li>Our team of experts help you build an MVP or full fledged app that meets your requirement</li>
                    </ul>
                </div>
                <div>
                    <button className='mobile-knowMore'>Know more</button>
                </div>
            </div>
            <div className="stars-grid">
            <div className='div-star1'><img src={starImage} alt=""  className='star1'/></div>
            <div className='div-star2'><img src={starImage} alt="" className='star2'/></div>
            <div className='div-star3'><img src={starImage} alt="" className='star3'/></div>
            </div>
            <div className='div-star4'><img src={starImage} alt="" className="star4"/></div>
        </div>
    </>
  )
}

export default MobileDev