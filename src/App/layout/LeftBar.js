import React from 'react';

import Ledger from '../Ledger';
import Inventory from '../Inventory';

const LeftBar = props =>
  <section className="left-bar">
    <Ledger entries={props.ledgerEntries} />
    <Inventory items={props.inventory} />
  </section>

  
export default LeftBar;