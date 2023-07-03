import React from 'react'
import './HowButton.css'

import works1 from '../assests/works0.png'
import works2 from '../assests/rafiki.png'
import works3 from '../assests/works3.png'
import works4 from '../assests/works4.png'
import works5 from '../assests/works5.png'
import works6 from '../assests/cuate.png'
import bgRocket from '../assests/rocket (1).png'

const HowButton = () => {
  return (
    <div className="bigContainer">
        <div className="howButtonContainer">
            <div className="headingHow" style={{fontSize:'60px', fontWeight:600, marginTop:100, height: '20%'}} >How App yard works ?</div>
            <div className="workingSection2">
                <div className="workingStep1"></div>
                <div className="workingStep1"></div>
                <div className="workingStep1"></div>
                <div className="workingStep1"></div>
                <div className="workingStep1"></div>
                <div className="workingStep1"></div>
            </div>
    </div>
    </div>
  )
}

export default HowButton