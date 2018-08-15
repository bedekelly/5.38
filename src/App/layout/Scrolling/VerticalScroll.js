import React from 'react';

import './VerticalScroll.css';


function VerticalScroll({ maxHeight, children, gridArea }) {
  const outerStyle = { gridArea };
  const innerStyle = { maxHeight };
  return (
    <div className="scrollable-container" style={ outerStyle }>
      <div className="scrollable" style={ innerStyle }>
        { children }
      </div>
    </div>
  );
}
  
  
export default VerticalScroll;
