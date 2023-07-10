import React, { useState, useEffect, useRef } from 'react';
import './Scrolling.css';

const ScrollBar = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNextComponent, setShowNextComponent] = useState(false);
  const [reverseScroll, setReverseScroll] = useState(false);
  const fakeComponentRef = useRef(null);
  const componentHeight = 1000; // Adjust the height of each component as desired

  useEffect(() => {
    const handleScroll = () => {
      const fakeComponent = fakeComponentRef.current;
      if (fakeComponent) {
        const { scrollTop, clientHeight, scrollHeight } = fakeComponent;

        if (!reverseScroll && scrollTop + clientHeight >= scrollHeight) {
          if (currentIndex < components.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setShowNextComponent(true);
            fakeComponent.scrollTop = 0;
          } else {
            setReverseScroll(true);
          }
        } else if (reverseScroll && scrollTop === 0) {
          if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setShowNextComponent(true);
            fakeComponent.scrollTop = scrollHeight - clientHeight;
          } else {
            setReverseScroll(false);
          }
        }
      }
    };

    const fakeComponent = fakeComponentRef.current;
    if (fakeComponent) {
      fakeComponent.addEventListener('scroll', handleScroll);
      return () => {
        fakeComponent.removeEventListener('scroll', handleScroll);
      };
    }
  }, [currentIndex, components, reverseScroll]);

  if (!components || components.length === 0) {
    return null;
  }

  return (
    <div className="scroll-container">
      <div className="fakeComponent" ref={fakeComponentRef}>
        <div className="insideFakeComponent">
          {/* Add content inside the fakeComponent */}
        </div>
      </div>

      <div className="scroll-content">
        {components.map((Component, index) => (
          <div
            key={index}
            className={`component ${index === currentIndex ? 'active' : ''}`}
            style={{
              height: `${componentHeight}px`,
              marginTop: `${componentHeight * index}px`,
              opacity: showNextComponent && index === currentIndex ? 1 : 0,
              transition: 'opacity 0.5s',
            }}
          >
            <div className="content">
              <Component />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBar;
