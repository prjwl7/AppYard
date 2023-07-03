import React from 'react'
import './HowWorks2.css'

import works1 from '../assests/works0.png'
import works2 from '../assests/rafiki.png'
import works3 from '../assests/works3.png'
import works4 from '../assests/works4.png'
import works5 from '../assests/works5.png'
import works6 from '../assests/cuate.png'
import bgRocket from '../assests/rocket (1).png'

import appYardLogo from '../assests/App yard logo.png'
import {FiPhoneCall} from 'react-icons/fi'
import {MdAlternateEmail} from 'react-icons/md'
import {AiOutlineCopyright} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
const HowWorks2 = () => {
  return (
            <div className="HowWorks2Container">
               
                <div className="HowWorks-section1">
                    <div style={{fontSize:60, fontWeight:600}}>How App yard works ?</div>
                </div>
                <div className="HowWorks-section2">
                    <div className="step1">
                        <div className="step-content1">
                        <div className='step-number'>Step 1</div>
                        <div style={{fontSize:32, fontWeight:600}}>Initiative</div>
                        <div  style={{fontSize:20, fontWeight:400, width:'80%'}} >Decided to take your business to next level</div>
                        </div>
                        <div className="works1"><img src={works1} alt="" /></div>
                    </div>
                    <div className="step2">
                        <div className="step-content2">
                        <div className='step-number'>Step 2</div>
                        <div style={{fontSize:32, fontWeight:600}}>Get a Quote</div>
                        <div style={{fontSize:20, fontWeight:400, width:'80%'}} >Contact us and get a quote for your app at the most affordable rates in India</div>
                        </div>
                        <div className="works2"><img src={works2} alt="" /></div>
                    </div>
                    <div className="step3">
                       <div className="step-content3">
                       <div className='step-number'>Step 3</div>
                        <div style={{fontSize:32, fontWeight:600}}>Master Plan</div>
                        <div style={{fontSize:20, fontWeight:400, width:'80%'}} >We share what, when, how before starting the project along with a customer ID which helps you track everything 24/7</div>
                       </div>
                       <div className="works3"><img src={works3} alt="" /></div>
                    </div>
                    <div className="step4">
                       <div className="step-content4">
                       <div className='step-number'>Step 4</div>
                        <div style={{fontSize:32, fontWeight:600}}>Magic</div>
                        <div style={{fontSize:20, fontWeight:400, width:'80%'}} >We pledge to deliver your dream app as soon as possible while keeping you posted about te development process</div>
                       </div>
                       <div className="works4"><img src={works4} alt="" /></div>
                    </div>
                    <div className="step5">
                        <div className="step-content5">
                        <div className='step-number'>Step 5</div>
                        <div style={{fontSize:32, fontWeight:600}}>Lets Grow</div>
                        <div style={{fontSize:20, fontWeight:400, width:'80%'}} >We want to watch you expand your business and that's why we are providing you 6 months of free maintenance</div>
                        </div>
                           <div className="works5"><img src={works5} alt="" /></div> 
                        </div>
                    <div className="step6">
                        <div className="step-content6">
                        <div className='step-number'>Step 6</div>
                        <div style={{fontSize:32, fontWeight:600}}>That's all</div>
                        <div style={{fontSize:20, fontWeight:400, width:'80%'}} >Your Project with APPYARD is successfully completed. Congratulations.</div>
                        </div>
                        <div className="works6"><img src={works6} alt="" /></div>
                    </div>
                </div>
                <div className="section2And3">
                <div className="howWorksSection2">
                <div className="appYardLogo">
                    <img src={appYardLogo} alt="" className='section2-logo' />
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:30, alignItems:'flex-start'}}>
                    <div style={{fontSize:24, fontWeight:600}}>Company</div>
                    <button>Our Clients</button>
                    <button>Why Choose Us</button>
                    <button>How it works</button>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:30, alignItems:'flex-start'}}>
                    <div style={{fontSize:24, fontWeight:600}}>Services</div>
                    <button>Mobile application</button>
                    <button>Website development</button>
                    <button>Digital Marketing</button>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:30, alignItems:'flex-start'}}>
                    <div style={{fontSize:24, fontWeight:600}}>Contact</div>
                    <div> <FiPhoneCall/> <button>+91 9876543210</button></div>
                    <div> <MdAlternateEmail/> <button>Domain@gmail.com</button></div>
                </div>
            </div>
                <hr style={{width:'90%', opacity:1, position:'relative', top:'40%', color:'black'}}/>
            <div className="workingSection3">
                <div className="copyright">
                    APPYARD <AiOutlineCopyright/> 2023 All RIGHTS RESERVED
                </div>
                <div className="social-icons">
                    <BsTwitter size={40} cursor={'pointer'}/>
                    <BsInstagram size={40}  cursor={'pointer'}/>
                    <BsFacebook size={40}  cursor={'pointer'}/>
                </div>
            </div>
                </div>
            </div>
  )
}

export default HowWorks2