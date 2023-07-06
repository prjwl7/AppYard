import React, { useState, useEffect, useRef } from 'react';
import './Scrolling.css';

const ScrollBar = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const { scrollTop, clientHeight, scrollHeight } = scrollContainer;
        const maxScrollTop = scrollHeight - clientHeight;
        const threshold = maxScrollTop * 0.935666; // Adjust the threshold as needed (90% in this example)

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
      return () => {
        scrollContainer.removeEventListener('wheel', handleScroll);
      };
    }
  }, [components, currentIndex]);

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
