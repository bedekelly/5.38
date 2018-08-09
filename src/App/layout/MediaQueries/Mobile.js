import React from 'react';

import MediaQuery from './MediaQuery';
import { mobileWidth } from './breakpoints';


function Mobile({ children }) {
  return <MediaQuery query={`(max-width: ${mobileWidth}px)`}>
    { children }
  </MediaQuery>;
}


export default Mobile;