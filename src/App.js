import React from 'react'
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
function App() {
  const components = [MobileDev, WebDev, DigitalMar, Helps, WhyChooseUs, HowWorks, GetInTouch];
  const components1 = [<MobileDev/>, <WebDev/>, <DigitalMar/>, <Helps/>, <WhyChooseUs/>, <HowWorks/>, <GetInTouch/>]
  return (
    <>
    <Navbar></Navbar>
    <HowWorks2></HowWorks2>
        
    </>
  );
}

export default App;
