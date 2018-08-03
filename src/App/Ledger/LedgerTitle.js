import React from 'react';

import './LedgerTitle.css';


function LedgerTitle({ title }) {
  return <h1 className="ledger-title">
    { title || "Ledger" }
  </h1>;
}


export default LedgerTitle;