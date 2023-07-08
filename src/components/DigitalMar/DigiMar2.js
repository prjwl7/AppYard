import React from 'react'
import './DigiMar2.css'
import DigiImage from '../assests/digimar.png'
import ShortAppYardLogo from '../assests/ShortAppYard.png'
const DigiMar2 = () => {
  return (
    <>
      <div className="digiMar2Container">
        <div className='mainImage2'><img src={DigiImage} alt="" /></div>
        <div className='digiMar2Heading'>Digital Marketing</div>
        <div className='digiMar2Heading1'></div>
        <div className="Digi2Logo"><img src={ShortAppYardLogo} alt="" /></div>
      </div>
    </>
  )
}

export default DigiMar2