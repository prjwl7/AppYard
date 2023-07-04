import React from 'react'
import './MobileDev5.css'


import flowerImage from '../assests/Flower.png'
import MobileDev5One from '../assests/Mobile-app-development 1.png'
import MobileDev5two from '../assests/Mobile-App-Developers-topdevelopers-1-180x180 1.png'
import MobileDev5three from '../assests/mobile-app-developer-2020-logo-180x160 1.png'
import MobileDev5four from '../assests/clutch_mobile_app_developers_2017 1.png'
import MobileDev5five from '../assests/Appfutura-badge-certified-blue 1.png'


const MobileDev5 = () => {
  return (
    <>
        <div className="MobileDev5Container">
            <div className="MobileDev5Content">
                <div className="MobileDev5Heading1">Award winning mobile app Development agency</div>
                {/* <div className="MobileDev5Heading2">Development agency</div> */}
                <div className="MobileDev5Heading3">We strive to provide clients with the highest quality of mobile application</div>
                <div className="badges">
                    <div className="badge1"><img src={MobileDev5One} alt="" /></div>
                    <div className="badge1"><img src={MobileDev5two} alt="" /></div>
                    <div className="badge1"><img src={MobileDev5three} alt="" /></div>
                    <div className="badge1"><img src={MobileDev5four} alt="" /></div>
                    <div className="badge1"><img src={MobileDev5five} alt="" /></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MobileDev5