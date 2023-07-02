import React from 'react'
import './HowWorks.css'
import rocket from '../assests/rocket.png'
const HowWorks = () => {
  return (
    <>
        <div className="HowWorkContainer">
            <div style={{fontSize:60, fontWeight:600}}>How App yard works ?</div>
            <div style={{fontSize:24, fontWeight:500}}>We have powerful and flexible tools in our arsenal to serve all kinds of business requirement</div>
            <div><img src={rocket} alt="" /></div>
            <div><button className='howWorks-knowMore'>Know More</button></div>
        </div>
    </>
  )
}

export default HowWorks