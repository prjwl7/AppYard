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
                <div>Mobile App Development</div>
                <div>To boost your company expansion</div>
                <div>
                    <ul>
                        <li>We provide services ranging from design to development and maintenance</li>
                        <li>Our team of experts help you build an MVP or full fledged app that meets your requirement</li>
                    </ul>
                </div>
                <div>
                    <button className='mobile-knowMore'>Know more</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default MobileDev