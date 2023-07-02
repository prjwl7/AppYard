import React from 'react'
import './DigitalMar.css'
import adwords from '../assests/adwords 2.png'
import linkedin from '../assests/linkedin 2.png'
import seo from '../assests/seo 2.png'
import DigiImage from '../assests/digimar.png'
const DigitalMar = () => {
  return (
    <>
        <div className="DigitalContainer">
            <div className="mobile-image">
                <img src={DigiImage} alt="image mobile" className='image-mobile' />
            </div>
            <div className="mobile-content">
                <div className='mobile-content-1'>Digital Marketing</div>
                <div className='mobile-content-2'>Gain more visibility and boost your success</div>
                <div className='mobile-content-3'>
                    <ul>
                        <li>We empower your business to captivate audiences, convert customers, and achieve digital excellence</li>
                        <li>Take the leap with Appyard and conquer the digital landscape today ! Be it Google Ads, Meta Ads, LinkedIn Ads or SEO</li>
                    </ul>
                </div>
                <div>
                    <button className='mobile-knowMore'>Know more</button>
                </div>
            </div>
            <div className='div-adwords'><img src={adwords} alt=""  className='star1'/></div>
            <div className='div-linkedin'><img src={linkedin} alt="" className='star2'/></div>
            <div className='div-seo'><img src={seo} alt="" className="star4"/></div>
        </div>
    </>
  )
}

export default DigitalMar