import React from 'react';

import './LedgerTitle.css';


const LedgerTitle = ({ title }) =>
  <h1 className="ledger-title">
    { title || "Ledger" }
  </h1>
  

export default LedgerTitle;