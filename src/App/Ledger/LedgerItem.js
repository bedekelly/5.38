import React from 'react';
import uuidv4 from 'uuid/v4';

import './LedgerItem.css';


const LedgerItem = i => 
  <li className="ledger-item" key={ uuidv4() }>{ i }</li> 


export default LedgerItem;
