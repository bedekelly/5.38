import React from 'react';

import './Scrollable.css';

const Scrollable = props => {
  const style = {maxHeight: `${props.maxHeight}px`};
  return <div className="scrollable" style={style}>
    { props.children }
  </div>
};

  
  
  
export default Scrollable;