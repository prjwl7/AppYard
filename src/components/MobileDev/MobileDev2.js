import React from 'react'
import './MobileDev2.css'
import MobileImage from '../assests/MobileImage.png'
import ShortLogo from '../assests/ShortAppYard.png'
const MobileDev2 = () => {
  return (
    <>
        <div className="MobileDev2Container">
            <div className="MobImage">
              <img src={MobileImage} alt="" />
            </div>
            <div className='headingMobile'></div>
            <div className="headingMobileFront">
              Mobile App Development</div>
            <div className='logoShort'>
              <img src={ShortLogo} alt="" />
              AppYard
            </div>
        </div>
    </>
  )
}

export default MobileDev2