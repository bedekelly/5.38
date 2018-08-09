import React from 'react';

import MediaQuery from './MediaQuery';


function Landscape({ children }) {
  return <MediaQuery query={`(orientation: landscape)`}>
    { children }
  </MediaQuery>
}


export default Landscape;