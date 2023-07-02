import React, { useState, useEffect, useRef } from 'react';
import './Scrolling.css';

const ScrollBar = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const { scrollTop, clientHeight, scrollHeight } = scrollContainer;
        const maxScrollTop = scrollHeight - clientHeight;
        const progress = scrollTop / maxScrollTop;
        const newIndex = Math.floor(progress * components.length);
        setCurrentIndex(newIndex);
        setScrollPosition(scrollTop);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [components]);

  if (!components || components.length === 0) {
    return null;
  }

  return (
    <div className="scroll-container" ref={scrollContainerRef}>
      <div className="scroll-content">
        {components.map((Component, index) => (
          <div key={index} className={`component ${index === currentIndex ? 'active' : ''}`}>
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBar;
