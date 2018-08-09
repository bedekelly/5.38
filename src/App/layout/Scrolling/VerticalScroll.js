import React from 'react';

import './VerticalScroll.css';


function Scrollable({ maxHeight, children }) {
  const style = { maxHeight: `${ maxHeight }` };
  return (
    <div className="scrollable-container">
      <div className="scrollable" style={ style }>
        { children }
      </div>
    </div>
  );
}
  
  
export default Scrollable;
