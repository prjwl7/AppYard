import React from 'react'
import './WebDev3.css'

import wordPressImage from '../assests/wordPress.png'
import reactImage from '../assests/reactImage.png'
import aws from '../assests/aws.png'
import NodeJsImage from '../assests/NodeJsImage.png'
import firebase from '../assests/firebase.png'
import NextJsImage from '../assests/NextJsImage.png'
import BootstrapImage from '../assests/BootStrap.png'
import logo from '../assests/ShortAppYard.png'

const WebDev3 = () => {
  return (
    <>
        <div className="WebDev3Container">
            <div style={{fontSize:60, fontWeight:600}} className='web3heading1' >Our Technology Stack</div>
            <div className="stackTechWeb">
                <div><img src={wordPressImage} alt="" /></div>
                <div><img src={reactImage} alt="" /></div>
                <div><img src={aws} alt="" /></div>
                <div><img src={NodeJsImage} alt="" className='nodeImage'/></div>
                <div><img src={firebase} alt="" /></div>
                <div><img src={NextJsImage} alt="" className='nodeImage'/></div>
                <div><img src={BootstrapImage} alt="" className='nodeImage'/></div>
            </div>
            <div className='shortLogoAppYard'><img src={logo} alt="" />App Yard</div>
        </div>
    </>
  )
}

export default WebDev3