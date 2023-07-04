import React from 'react'
import './WebDev2.css'

import manWebsite from '../assests/man-website.png'

const WebDev2 = () => {
  return (
    <>
        <div className="WebDev2Container">
        <div className="WebImage">
              <img src={manWebsite} alt="" />
            </div>
            <div className='headingMobileWeb'></div>
            <div className="headingMobileFrontWeb">
              Website Development</div>
        </div>
    </>
  )
}

export default WebDev2