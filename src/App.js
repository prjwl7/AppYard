import React from 'react'
//Components 
import Navbar from './components/NavBar/Navbar'
import Landing from './components/Landing/Landing';
import MobileDev from './components/MobileDev/MobileDev';
import WebDev from './components/WebDev/WebDev';
import DigitalMar from './components/DigitalMar/DigitalMar'
import ScrollBar from './components/Scrolling/Scrolling';
import Helps from './components/Helps/Helps';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import HowWorks from './components/HowWorks/HowWorks';
import GetInTouch from './components/GetInTouch/GetInTouch';
import MobileDev2 from './components/MobileDev/MobileDev2';
import MobileDev3 from './components/MobileDev/MobileDev3';
import HowWorks2 from './components/HowWorks/HowWorks2';
import MobileDev4 from './components/MobileDev/MobileDev4';
import MobileDev5 from './components/MobileDev/MobileDev5';
import WebDev2 from './components/WebDev/WebDev2';
import WebDev3 from './components/WebDev/WebDev3';
import WebDev4 from './components/WebDev/WebDev4';
import WebDev5 from './components/WebDev/WebDev5';
import GetAQuote from './components/GetAQuote/GetAQuote';
import DigiMar2 from './components/DigitalMar/DigiMar2';
import DigiMar3 from './components/DigitalMar/DigiMar3';
import DigiMar4 from './components/DigitalMar/DigiMar4';
import DigiMar5 from './components/DigitalMar/DigiMar5';
import DigiMar6 from './components/DigitalMar/DigitalMar6';
import DigiMar7 from './components/DigitalMar/DigiMar7';
//Libraries
import { BrowserRouter as Router, Routes, Route , HashRouter} from 'react-router-dom';
import 'zone.js';
import DigiMar8 from './components/DigitalMar/DigiMar8';


function App() {
  const components = [MobileDev, WebDev, DigitalMar, Helps, WhyChooseUs, HowWorks, GetInTouch, GetAQuote];
  const componentsWebDev = [WebDev2, WebDev3, WebDev4, WebDev5];
  const componentsMobileDev = [MobileDev2, MobileDev3, MobileDev4, MobileDev5];
  const componentDigitalMarketing = [DigiMar2, DigiMar3, DigiMar4, DigiMar5, DigiMar6, DigiMar7, DigiMar8]

  return (
    
     <>
         <Router basename={process.env.PUBLIC_URL}>
         <Navbar></Navbar>
    <Routes>
      <Route path="/" element = {<ScrollBar components={components}/>} />
      <Route
        path="/scrollbarMobileDev" element = {<ScrollBar components={componentsMobileDev} />}
      />
      <Route
        path="/scrollbarWebDev" element = {<ScrollBar components={componentsWebDev} />}
      />
      <Route
        path="/scrollbarDigitalMarketing" element = {<ScrollBar components={componentDigitalMarketing} />}
      />
    </Routes>

         </Router> 

         
      {/* <Navbar></Navbar>
      <ScrollBar components = {components}></ScrollBar>
      <ScrollBar components={components}></ScrollBar>
      <DigiMar4></DigiMar4> */}
     
     </>
  );
}

export default App;
