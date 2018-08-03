import React from 'react';

import Ledger from '../Ledger';
import Inventory from '../Inventory';

import Mobile from './MediaQueries/Mobile';
import Desktop from './MediaQueries/Desktop';


const LeftBar = props =>
  <section className="left-bar">
    <Desktop>
      <Ledger entries={props.ledgerEntries} />
    </Desktop>

    <Mobile>
      <Inventory items={props.inventory} />
    </Mobile>
  </section>

  
export default LeftBar;