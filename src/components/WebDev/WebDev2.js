import React from 'react'
import './WebDev2.css'
import ShortLogo from '../assests/ShortAppYard.png'
import manWebsite from '../assests/man-website.png'

const WebDev2 = () => {
  return (
    <>
        <div className="WebDev2Container">
        <div className="WebImage">
              <img src={manWebsite} alt="" className='Web2Img'/>
            </div>
            <div className='headingMobileWeb'></div>
            <div className="headingMobileFrontWeb">
              Website Development</div>
              <div className='WeblogoShort'>
              <img src={ShortLogo} alt="" className='Web2LogoImg'/>
              App Yard
            </div>
        </div>
    </>
  )
}

export default WebDev2