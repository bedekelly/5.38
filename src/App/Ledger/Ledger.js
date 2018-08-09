import React from 'react';

import LedgerTitle from './LedgerTitle';
import LedgerItems from './LedgerItems';


function Ledger({ entries, title }) {
  return <React.Fragment>
    { title && <LedgerTitle /> }
    <LedgerItems items={entries} />
  </React.Fragment>
}


export default Ledger;