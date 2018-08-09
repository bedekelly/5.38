import React from 'react';

import MediaQuery from './MediaQuery';


function Portrait({ children }) {
  return <MediaQuery query={`(orientation: portrait)`}>
    { children }
  </MediaQuery>
}


export default Portrait;