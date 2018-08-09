import React from 'react';

import './HorizontalScroll.css';


function HorizontalScroll({ maxHeight, children }) {
  const style = { maxHeight: `${ maxHeight }` };
  return (
    <div className="h-scrollable-container" style={ style }>
      <div className="h-scrollable" style={ style }>
        { children }
      </div>
    </div>
  );
}
  
  
export default HorizontalScroll;
