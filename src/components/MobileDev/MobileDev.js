import React from 'react'
import './MobileDev.css'
import apple from '../assests/apple 1.png'
import android from '../assests/android os.png'
import mobileImage from '../assests/MobileImage.png'

import { useNavigate } from 'react-router-dom'
const MobileDev = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/scrollbarMobileDev');
      };
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
                    <button className='mobile-knowMore' onClick={handleButtonClick}>Know more</button>
                </div>
            </div>
            <div className='div-star1'><img src={android} alt=""  className='star1'/></div>
            <div className='div-star4'><img src={apple} alt="" className="star4"/></div>
        </div>
    </>
  )
}

export default MobileDev