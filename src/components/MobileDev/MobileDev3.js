import React from 'react'
import './MobileDev3.css'
import java from '../assests/java.png'
import firebase from '../assests/firebase.png'
import flutter from '../assests/flutter.png'
import kotlin from '../assests/kotlin.png'
import reactNative from '../assests/react-native.png'
import androidStudio from '../assests/androidStudio.png'
import aws from '../assests/aws.png'
import logo from '../assests/ShortAppYard.png'
const MobileDev3 = () => {
  return (
    <>
        <div className="MobileDev3Container">
            <div style={{fontSize:60, fontWeight:600}}  >Our Technology Stack</div>
            <div className="stackTech">
                <div><img src={java} alt="" /></div>
                <div><img src={firebase} alt="" /></div>
                <div><img src={flutter} alt="" /></div>
                <div><img src={kotlin} alt="" /></div>
                <div><img src={reactNative} alt="" /></div>
                <div><img src={androidStudio} alt="" /></div>
                <div><img src={aws} alt="" /></div>
            </div>
            <div className='shortLogoAppYard'><img src={logo} alt="" />App Yard</div>
        </div>
    </>
  )
}

export default MobileDev3