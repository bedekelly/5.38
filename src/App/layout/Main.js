import React from 'react';

import { Mobile, Desktop, Portrait, Landscape } from './MediaQueries';
import MobileLayout from './MobileLayout';
import DesktopLayout from './DesktopLayout';

import './Main.css';


function Main(props) {
  return <section className="main">
    <Desktop>
      <DesktopLayout {...props} />
    </Desktop>

    <Mobile>
      <Portrait>
        <MobileLayout {...props} />
      </Portrait>
      <Landscape>
        Mobile landscape not supported.
      </Landscape>
    </Mobile>
  </section>;
}


export default Main;