import React from 'react';

import MediaQuery from './MediaQuery';
import { mobileWidth } from './breakpoints';


const Mobile = props =>
  <MediaQuery query={`(max-width: ${mobileWidth}px)`}>
    { props.children }
  </MediaQuery>


export default Mobile;