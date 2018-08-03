import React from 'react';

import Inventory from '../Inventory';
import Desktop from './MediaQueries/Desktop';


const RightBar = props => {
  return <Desktop>
    <section className="right-bar">
      <Inventory items={props.inventory} />
    </section>
  </Desktop>
}

export default RightBar;