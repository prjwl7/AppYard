import React from 'react'
import './UxPage1.css'
import page1Image from '../assests/text program on computer screen.png'
import shortpage1logo from '../assests/ShortAppYard.png'
const UXPage1 = () => {
  return (
    <>
        <div className="uxPage1Container">
            <div className="uxPage1Image"><img src={page1Image} alt="" className='uxPage1Img'/></div>
            <div className="uxPage1heading">
                UX / UI Design
            </div>
            <div className="uxPag1Logo">
                <img src={shortpage1logo} alt="" />App Yard
            </div>
        </div>
    </>
  )
}

export default UXPage1