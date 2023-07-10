import React from 'react'
import './UxPage3.css'

import uxPage3Image1 from '../assests/AI - light mode 1.png'
import uxPage3Image2 from '../assests/lebrons 1.png'
import uxPage3Image3 from '../assests/KTM 1.png'

const UxPage3 = () => {
  return (
    <>
        <div className="uxPage3Container">
            <div className="uxPage3heading1">User Interface</div>
            <div className="uxPage3Image">
                <div className="uxPage3Image1"><img src={uxPage3Image1} alt="" /></div>
                <div className="uxPage3Image2"><img src={uxPage3Image2} alt="" /></div>
                <div className="uxPage3Image3"><img src={uxPage3Image3} alt="" className='uxPage3Img3' /></div>
            </div>
            <div className="uxPage3heading2">Transform your user interfaces into engaging and intuitive designs. Our UI expertise focses on creating visually appealing layouts, smooth interactions, and seamless navigation for optimal user satisfaction.</div>
        </div>
    </>
  )
}

export default UxPage3