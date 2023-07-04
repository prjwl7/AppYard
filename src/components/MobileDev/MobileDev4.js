import React from 'react'
import './MobileDev4.css'

import bro from '../assests/bro.png'


const MobileDev4 = () => {
  return (
    <>
        <div className="MobileDev4Container">
            <div className="Mobile4Image">
                <img src={bro} alt="" />
            </div>
            <div className="Mobile4Content">
                <div className='Mobile4ContentTop'>Our mobile app development services have a Proven track record</div>
                <div className="Mobile4List">
                    <ul style = {{fontSize: 32, fontWeight:600, width:'100%'}}>
                        <li  style = {{fontSize: 24, fontWeight:600, marginBottom:70}}>We have 500+ happy clients</li>
                        <li  style = {{fontSize: 24, fontWeight:600, marginBottom:70}}>We developed 400+ application</li>
                        <li  style = {{fontSize: 24, fontWeight:600, marginBottom:0}}>Our customers retention rate was 92%</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default MobileDev4