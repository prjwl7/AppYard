import React from 'react'
import './Helps.css'
import wardMoney from '../assests/Wad of money.png'
import crypto from '../assests/cryptocurrency market growth.png'
const Helps = () => {
  return (
    <>
    <div className="helpContainer">
        <div className="help1">Unlock your Business Potential</div>
        <div className="help2">₹14CR</div>
        <div className="help3">Thats the total amount of investments we helped businesses raised</div>
        <div className="wardMoney"><img src={wardMoney} alt="" className='wardMoneyImage'/></div>
        <div className="cryptoImage"><img src={crypto} alt="" className='cryptocurrency'/></div>
    </div>
    </>
  )
}

export default Helps