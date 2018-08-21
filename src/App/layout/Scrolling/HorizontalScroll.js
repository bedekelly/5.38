import React from 'react';

import './HorizontalScroll.css';


function HorizontalScroll({ maxHeight, maxWidth, children, gridArea }) {
  const innerStyle = { maxHeight, maxWidth };
  const outerStyle = { maxHeight, maxWidth, gridArea }
  return (
    <div className="h-scrollable-container" style={ outerStyle }>
      <div className="h-scrollable" style={ innerStyle }>
        { children }
      </div>
    </div>
  );
}
  
  
export default HorizontalScroll;
