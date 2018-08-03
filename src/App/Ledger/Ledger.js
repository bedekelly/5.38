import React from 'react';

import LedgerTitle from './LedgerTitle';
import LedgerItems from './LedgerItems';


function Ledger({ entries }) {
  return <React.Fragment>
    <LedgerTitle />
    <LedgerItems items={entries} />
  </React.Fragment>
}


export default Ledger;