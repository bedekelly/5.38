import React from 'react';

import './HorizontalScroll.css';


function HorizontalScroll({ maxHeight, children, gridArea }) {
  const innerStyle = { maxHeight };
  const outerStyle = { maxHeight, gridArea }
  return (
    <div className="h-scrollable-container" style={ outerStyle }>
      <div className="h-scrollable" style={ innerStyle }>
        { children }
      </div>
    </div>
  );
}
  
  
export default HorizontalScroll;
