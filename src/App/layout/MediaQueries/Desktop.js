import React from 'react';

import MediaQuery from './MediaQuery';
import { mobileWidth } from './breakpoints';


function Desktop({ children }) {
  return <MediaQuery query={`(min-width: ${mobileWidth + 1}px)`}>
    { children }
  </MediaQuery>;
}


export default Desktop;