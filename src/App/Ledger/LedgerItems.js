import React from 'react';

import LedgerItem from './LedgerItem';

import './LedgerItems.css';


function LedgerItems({ items }) {
  return <ul className="ledger-items">
    { items.map(LedgerItem) }
  </ul>;
}


export default LedgerItems;