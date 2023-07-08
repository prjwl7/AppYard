import React, { useState, useEffect, useRef, Component } from 'react';
import './Scrolling.css';

import FakeComponent from '../FakeComponent/FakeComponent';

const ScrollBar = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const componentHeight = 300; // Adjust the height of each component as desired

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const { scrollTop, clientHeight, scrollHeight } = scrollContainer;
        const maxScrollTop = scrollHeight - clientHeight;

        const isReverseScroll = event.deltaY < 0;
        const isScrollAtTop = scrollTop === 0;
        const isScrollAtBottom = scrollTop === maxScrollTop;

        if (isReverseScroll && currentIndex === 0 && isScrollAtTop) {
          // Prevent reverse scrolling on the first component
          return;
        } else if (!isReverseScroll && currentIndex === components.length - 1 && isScrollAtBottom) {
          // Disable scrolling further on the last component
          return;
        } else if (isReverseScroll && isScrollAtTop) {
          // Reset the scrollbar position to the bottom and update the component index
          scrollContainer.scrollTop = maxScrollTop;
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else if (!isReverseScroll && isScrollAtBottom) {
          // Reset the scrollbar position to the top and update the component index
          scrollContainer.scrollTop = 0;
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }

        setScrollPosition(scrollTop);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleScroll);
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('wheel', handleScroll);
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [components, currentIndex]);

  if (!components || components.length === 0) {
    return null;
  }

  const totalScrollHeight = componentHeight * components.length ;

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <div className="scroll-content" style={{ height: `${totalScrollHeight}px` }}>
        {components.map((Component, index) => (
          <div key={index} className={`component ${index === currentIndex ? 'active' : ''}`} style={{ height: `${componentHeight}px` }}>
            {index === currentIndex && <Component />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBar;
