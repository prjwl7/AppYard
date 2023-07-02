import React from 'react'
import questionMark from '../assests/question-mark 1.png'
import timeImage from '../assests/time.png'
import toolBox from '../assests/tool box.png'
import wallet from '../assests/black wallet with money.png'
import './WhyChooseUs.css'
const WhyChooseUs = () => {
  return (
    <>
        <div className="chooseContainer">
            <div className="questionmark">
                <div className="why" style={{fontSize:80, fontWeight:600}}>Why Choose Appyard</div>
                <div className="questionMarkImage"><img src={questionMark} alt="" /></div>
            </div>
            <div className="timeAndWallet">
                <div className="time">
                    <img src={timeImage} alt="" />
                    <div className="timeContent" style={{marginLeft:97, width:'50%', display:'flex', flexDirection:'column', gap:30}}>
                    <div style={{fontSize:24, fontWeight:600}}>Time Management</div>
                    <div>App Yard knows the value of time</div>
                    </div>
                </div>
                <div className="tool">
                    <img src={toolBox} alt="" />
                    <div className="toolContent" style={{marginLeft:50, width:'50%', display:'flex', flexDirection:'column', gap:30}}>
                    <div style={{fontSize:24, fontWeight:600}}>Ease of maintenance</div>
                    <div style={{fontSize:16, fontWeight:400}}>Makes your life easier. We Provide Seamless Maintenance for your Apps</div>
                    </div>
                </div>
                <div className="walletDiv">
                    <img src={wallet} alt="" />
                    <div className="walletContent" style={{marginLeft:120, width:'50%', display:'flex', flexDirection:'column', gap:30}}>
                    <div style={{fontSize:24, fontWeight:600}}>Cost effective</div>
                    <div>We deliver you the most optimal product both aesthetically and economically</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhyChooseUs