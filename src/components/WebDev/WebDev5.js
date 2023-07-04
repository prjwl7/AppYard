import React from 'react'
import './WebDev5.css'

import MobileDev5One from '../assests/Mobile-app-development 1.png'
import MobileDev5two from '../assests/Mobile-App-Developers-topdevelopers-1-180x180 1.png'
import MobileDev5three from '../assests/mobile-app-developer-2020-logo-180x160 1.png'
import WebDev5Image from '../assests/WebDev5image4.png'

const WebDev5 = () => {
  return (
    <>
         <div className="WebDev5Container">
            <div className="WebDev5Content">
                <div className="WebDev5Heading1">Award winning web app Development agency</div>
                {/* <div className="MobileDev5Heading2">Development agency</div> */}
                <div className="WebDev5Heading3">We strive to provide clients with the highest quality of mobile application</div>
                <div className="badgesWeb">
                    <div className="badge1Web"><img src={MobileDev5One} alt="" /></div>
                    <div className="badge1Web"><img src={MobileDev5two} alt="" /></div>
                    <div className="badge1Web"><img src={MobileDev5three} alt="" /></div>
                    <div className="badge1Web"><img src={WebDev5Image} alt="" /></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WebDev5