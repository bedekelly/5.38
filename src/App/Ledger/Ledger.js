import React from 'react';

import LedgerTitle from './LedgerTitle';
import LedgerItems from './LedgerItems';


const Ledger = ({ entries }) =>
  <React.Fragment>
    <LedgerTitle />
    <LedgerItems items={entries} />
  </React.Fragment>
  


export default Ledger;