import React from 'react'
import './DigiMar4.css'
import adwords from '../assests/adwords 1.png'
import intersect1 from '../assests/Intersect.png'
import intersect2 from '../assests/Intersect (1).png'
const DigiMar4 = () => {
  return (
    <>
        <div className="DigiMar4Container">
            <div className="curvydigi1"><img src={intersect1} alt="" className='digi4Intersect1'/></div>
            <div className="digi4content">
            <div className="digi4heading1" style={{zIndex:1}}>Google ADS</div>
            <div className="digi4Image"  style={{zIndex:1}}><img src={adwords} alt="" className='adwordsBig'/></div>
            <div className="digi4heading2"  style={{zIndex:1}}>Reach your target audience at the right time and piece with the google ads</div>
            </div>
            <div className="curvydigi2"><img src={intersect2} alt="" className='digi4Intersect2' /></div>
        </div>
    </>
  )
}

export default DigiMar4