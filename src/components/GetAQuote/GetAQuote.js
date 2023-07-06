import React from 'react'
import './GetAQuote.css'

import ShortAppYardLogo from '../assests/ShortAppYard.png'
import QuoteImage from '../assests/rafiki.png'

const GetAQuote = () => {
  return (
    <>
        <div className="quoteContainer">
            <div className="insideQuoteContainer">
                <div className="quoteLogos">
                    <img src={ShortAppYardLogo} alt="" className='shortLogoImage'/>
                    App Yard
                </div>
                <div className="quoteHeading">Get a quote All starts here </div>
                <div className="QuoteImage">
                    <img src={QuoteImage} alt="" className='QuoteImg'/>
                </div>
                <div className="quoteTextFields">
                <div style={{ display:'flex', flexDirection:'column', gap:10}} className='quotetextFieldsContent1'>
                    <label htmlFor="name">Name &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" id='name' placeholder='&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Enter your name' name='Name'/>
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', gap:10}} className='quotetextFieldsContent2'>
                    <label htmlFor="idees"> Mail ID or Phone Number </label>
                    <input type="text" id='idees' placeholder='&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Enter your mail ID or Phone number' name='idees'/>
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', gap:10}} className='quotetextFieldsContent3'>
                    <label htmlFor="message"> Message </label>
                    <input type="text" id='message' placeholder='&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Enter your message' name='idees' className='quoteInputMessage'/>
                    </div>
                    <div className="QuoteSend"><button className='QuotesendButton'>Send</button></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default GetAQuote