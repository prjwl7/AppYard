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
        const threshold = maxScrollTop * 0.935666; // Adjust the threshold as needed (90% in this example)

        if (scrollTop >= threshold) {
          // Reset the scrollbar position to the top and update the component index
          scrollContainer.scrollTop = 0;
          setCurrentIndex((prevIndex) => getNextIndex(prevIndex));
        }

        setScrollPosition(scrollTop);
      }
    };

    const getNextIndex = (currentIndex) => {
      // Calculate the next index based on the defined order
      const nextIndex = currentIndex + 1;
      return nextIndex >= components.length ? 0 : nextIndex;
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleScroll);
      return () => {
        scrollContainer.removeEventListener('wheel', handleScroll);
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
