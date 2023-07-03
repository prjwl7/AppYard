import React, { useRef, useEffect } from 'react';
import './Scrollbar2.css';

const Scrollbar2 = ({ children }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    // Adjust the height of the content to match the scrollable area
    if (contentRef.current) {
      contentRef.current.style.height = `1000px`;
    }
  }, []);

  return (
    <div className="scrollbar2">
      <div className="content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default Scrollbar2;
