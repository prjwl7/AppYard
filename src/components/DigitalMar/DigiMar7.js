import React from 'react'
import './DigitalMar7.css'
import googleImage from '../assests/search (4) 1.png'
const DigiMar7 = () => {
  return (
    <>
        <div className="digi7container">
           <div className="digi7Content">
           <div className="digi7heading1">Google Ratings</div>
            <div className="digi7Image"><img src={googleImage} alt="" /></div>
            <div className="digi7heading2">Boost your Credibility and reputation with positive google ratings and reviews</div>
           </div>
            <div className="googleLines">
            <div className="google1"></div>
            <div className="google2"></div>
            <div className="google3"></div>
            <div className="google4"></div>
            </div>
        </div>
    </>
  )
}

export default DigiMar7