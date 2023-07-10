import React from 'react'
import './HowWorks.css'
import rocket from '../assests/rocket.png'
import { useNavigate } from 'react-router-dom'
const HowWorks = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/HowWorks2');
    console.log('Working');
  };
  return (
    <>
        <div className="HowWorkContainer">
            <div style={{fontSize:60, fontWeight:600}} className='HowWorkContainerContent1'>How App yard works ?</div>
            <div style={{fontSize:24, fontWeight:500}} className='HowWorkContainerContent2'>We have powerful and flexible tools in our arsenal to serve all kinds of business requirement</div>
            <div className='divrocketHowWorksImage'><img src={rocket} alt=""  className='rocketHowWorksImage'/></div>
            <div><button className='howWorks-knowMore' onClick={handleButtonClick}>Know More</button></div>
        </div>
    </>
  )
}

export default HowWorks