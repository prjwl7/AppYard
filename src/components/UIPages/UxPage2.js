import React from 'react'
import './UxPage2.css'

import UxPage2Image from '../assests/uxpage2image.png'

const UxPage2 = () => {
  return (
    <>
        <div className="uxPage2Container">
            <div className="uxpage2heading1">User Experience</div>
            <div className="usPage2Image"><img src={UxPage2Image} alt="" /></div>
            <div className="uxpage2heading2">Put user satisfaction at the forefront with our Ux expertise. We design seamless experiences that priotize usability, accessibility and emotional connection, resulting in delighted users and increased conversions.</div>
        </div>
    </>
  )
}

export default UxPage2