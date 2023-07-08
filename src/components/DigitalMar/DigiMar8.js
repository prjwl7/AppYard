import React from 'react'
import './DigiMar8.css'
import badge1 from '../assests/digibadge1.png'
import badge2 from '../assests/digibadge2.png'
import badge3 from '../assests/digibadge3.png'
import badge4 from '../assests/digibadge4.png'

const DigiMar8 = () => {
  return (
    <>
        <div className="digi8Container">
            <div className="digi8content">
                <div className="digi8heading">Award winning digital marketing agency</div>
                <div className="digi8badges">
                    <div><img src={badge1} alt="" /></div>
                    <div><img src={badge2} alt="" /></div>
                    <div><img src={badge3} alt="" /></div>
                    <div><img src={badge4} alt="" /></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DigiMar8