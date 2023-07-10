import React from 'react'
import './WebDev4.css'

import bro from '../assests/bro.png'

const WebDev4 = () => {
  return (
    <>
        <div className="WebDev4Container">
            <div className="Web4Image">
                <img src={bro} alt="" className='Web4Img'/>
            </div>
            <div className="Web4Content">
                <div className='Web4ContentTop'>Why are we high demand web development service ?</div>
                <div className="Web4List">
                    <ul style = {{fontSize: 32, fontWeight:600, width:'100%'}}>
                        <li  style = {{fontSize: 24, fontWeight:600, marginBottom:70}}>We have 500+ happy clients</li>
                        <li  style = {{fontSize: 24, fontWeight:600, marginBottom:70}}>We developed 100+ sites</li>
                        <li  style = {{fontSize: 24, fontWeight:600, marginBottom:0}}>Our customers retention rate was 98%</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default WebDev4