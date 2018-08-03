import React from 'react';

import MediaQuery from './MediaQuery';
import { mobileWidth } from './breakpoints';


const Desktop = props =>
  <MediaQuery query={`(min-width: ${mobileWidth + 1}px)`}>
    { props.children }
  </MediaQuery>


export default Desktop;