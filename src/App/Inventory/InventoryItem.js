import React from 'react';


function InventoryItem({ quantity, name }) { 
  return <li>{ `${quantity}x ${name}` }</li>
}


export default InventoryItem;