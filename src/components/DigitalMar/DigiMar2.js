import React from 'react'
import './DigiMar2.css'
import DigiImage from '../assests/digimar.png'
import ShortAppYardLogo from '../assests/ShortAppYard.png'

import { useNavigate } from 'react-router-dom'

const DigiMar2 = () => {
  return (
    <>
      <div className="digiMar2Container">
        <div className='mainImage2'><img src={DigiImage} alt="" className='digi2LogoImg' /></div>
        <div className='digiMar2Heading'>Digital Marketing</div>
        <div className='digiMar2Heading1'></div>
        <div className="Digi2Logo"><img src={ShortAppYardLogo} alt="" />App Yard</div>
      </div>
    </>
  )
}

export default DigiMar2