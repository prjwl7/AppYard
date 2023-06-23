import React, { useEffect, useState } from 'react';
import './Landing.css';

const Landing = () => {
  const [isWeVisible, setIsWeVisible] = useState(true);
  const [weContent, setWeContent] = useState('WE');
  const [isShapeChanged, setIsShapeChanged] = useState(false);
  const [showAdditionalDivs, setShowAdditionalDivs] = useState(false);
  const [showCircles, setShowCircles] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showplusHundred, setShowplusHundred] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setIsWeVisible(false);
    }, 1000);

    const timeout2 = setTimeout(() => {
      setWeContent('ARE');
      setIsWeVisible(true);
    }, 1050);

    const timeout3 = setTimeout(() => {
      setIsWeVisible(false);
    }, 2000);

    const timeout4 = setTimeout(() => {
      setWeContent('WITH YOU');
      setIsWeVisible(true);
    }, 2050);

    const timeout5 = setTimeout(() => {
      setIsShapeChanged(true);
    }, 2000);

    const timeout6 = setTimeout(() => {
      setShowAdditionalDivs(true); 
      setAnimationStarted(true);
    }, 4000);
    
    const timeout7 = setTimeout(() => {
      setWeContent('');
    }, 4700);

    const timeout8 = setTimeout(() => {
      setShowCircles(true);
    },7000);
   
    const timeout9 = setTimeout(() => {
      setShowContent(true);
    },9000);
    
    const timeout10 = setTimeout(() => {
      setShowplusHundred(true);
    },10000);



    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
      clearTimeout(timeout7);
      clearTimeout(timeout8);
      clearTimeout(timeout9);
      clearTimeout(timeout10);
    };
  }, []);

  return (
    <div className={`LandingPage ${isShapeChanged ? 'shape-animation' : ''} ${animationStarted ? 'animation-start' : ''}`}>
      <div className={`we ${isWeVisible ? 'we-animation1' : ''}`}>
        {weContent}
      </div>
      {showAdditionalDivs && (
        <>
          <div className="leftDiv"></div>
          <div className="rightDiv"></div>
        </>
      )}
       {showCircles && (
        <div className="concentricCircles">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
        <div className="circle6"></div>
        <div className="circle7"></div>
        <div className="circle8"></div>
        <div className="circle9"></div>
      </div>
       )}

      {showContent && (
        <>
          <div className="content1" style={{fontFamily:'Montserrat',fontWeight:600, fontSize:60,zIndex : 99999, backgroundColor:'transparent', width:'80%'}}>We launch your app fastly and affordable</div>
        </>
      )}

      {showplusHundred && (
        <>
             <div className="plushundred">
              100+ company entrusted us with their dreams
              <button className='getWebsite'>Get your website</button>
            </div>
        </>
      )

      }
     
      </div>
  );
};

export default Landing;
