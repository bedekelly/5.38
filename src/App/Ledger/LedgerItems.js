import React from 'react';

import LedgerItem from './LedgerItem';

import './LedgerItems.css';


const LedgerItems = ({ items }) =>
  <ul className="ledger-items">
    { items.map(LedgerItem) }
  </ul>


export default LedgerItems;