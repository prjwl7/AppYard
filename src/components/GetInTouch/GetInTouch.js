import React from 'react'
import './GetInTouch.css'

import appYardLogo from '../assests/App yard logo.png'
import amico from '../assests/amico.png'

import {FiPhoneCall} from 'react-icons/fi'
import {MdAlternateEmail} from 'react-icons/md'
import {AiOutlineCopyright} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const GetInTouch = () => {
  return (
    <>
        <div className="GetInTouchContainer">
            <div className="section1">
                <div className='imageAmico'>
                    <img src={amico} alt="" className='amicoImage'/>
                </div>
                <div className="GetIn" style={{fontSize:100, fontWeight:600, width:'30%'}}>Get In Touch</div>
                <div className="connect">
                    <div style={{fontSize:24, fontWeight:600}} className='LetsConnect'>Lets connect</div>
                    <div style={{ display:'flex', flexDirection:'column', gap:10}} className='textFieldsContent1'>
                    <label htmlFor="name">Name &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" id='name' placeholder='&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Enter your name' name='Name'/>
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', gap:10}} className='textFieldsContent2'>
                    <label htmlFor="idees"> Mail ID or Phone Number </label>
                    <input type="text" id='idees' placeholder='&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Enter your mail ID or Phone number' name='idees'/>
                    </div>
                    <div className="Send"><button className='sendButton'>Send</button></div>
                </div>
            </div>
            <div className="section2">
                <div className="appYardLogo">
                    <img src={appYardLogo} alt="" className='section2-logo' />
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:30, alignItems:'flex-start'}} className='section2Content1'>
                    <div style={{fontSize:24, fontWeight:600}}>Company</div>
                    <button>Our Clients</button>
                    <button>Why Choose Us</button>
                    <button>How it works</button>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:30, alignItems:'flex-start'}}  className='section2Content2'>
                    <div style={{fontSize:24, fontWeight:600}}>Services</div>
                    <button>Mobile application</button>
                    <button>Website development</button>
                    <button>Digital Marketing</button>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:30, alignItems:'flex-start'}}  className='section2Content3'>
                    <div style={{fontSize:24, fontWeight:600}}>Contact</div>
                    <div> <FiPhoneCall/> <button>+91 9876543210</button></div>
                    <div> <MdAlternateEmail/> <button>Domain@gmail.com</button></div>
                </div>
            </div>
            <hr style={{width:'90%', opacity:0.5, position:'relative', top:'10%'}}/>
            <div className="section3">
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
    </>
  )
}

export default GetInTouch