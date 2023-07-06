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
import Scrollbar2 from './components/Scollbar2/Scrollbar2';
import MobileDev4 from './components/MobileDev/MobileDev4';
import MobileDev5 from './components/MobileDev/MobileDev5';
import WebDev2 from './components/WebDev/WebDev2';
import WebDev3 from './components/WebDev/WebDev3';
import WebDev4 from './components/WebDev/WebDev4';
import WebDev5 from './components/WebDev/WebDev5';
import GetAQuote from './components/GetAQuote/GetAQuote';

//Libraries
import { BrowserRouter as Router, Routes, Route , HashRouter} from 'react-router-dom';
import 'zone.js';


function App() {
  const components = [MobileDev, WebDev, DigitalMar, Helps, WhyChooseUs, HowWorks, GetInTouch];
  const componentsWebDev = [WebDev2, WebDev3, WebDev4, WebDev5];
  const componentsMobileDev = [MobileDev2, MobileDev3, MobileDev4, MobileDev5];

  return (
    
     <>
         <Router basename={process.env.PUBLIC_URL}>
         <Navbar></Navbar>
    <Routes>
      <Route path="/" element = {<MobileDev/>} />
      <Route path="/AppYard/WebDev" element = {<WebDev/>} />
      <Route path="/AppYard/DigitalMar" element = {<DigitalMar/>} />
      <Route
        path="/scrollbar" element = {<ScrollBar components={components} />}
      />
      <Route
        path="/scrollbarMobileDev" element = {<ScrollBar components={componentsMobileDev} />}
      />
      <Route
        path="/scrollbarWebDev" element = {<ScrollBar components={componentsWebDev} />}
      />
    </Routes>

         </Router>
     </>
  );
}

export default App;
