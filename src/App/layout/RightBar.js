import React from 'react';

import Inventory from '../Inventory';


const RightBar = props => {
  console.log(props);
  return <section className="right-bar">
    <Inventory items={props.inventory} />
  </section>
}

export default RightBar;