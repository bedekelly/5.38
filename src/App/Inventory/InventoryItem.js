import React from 'react';


const InventoryItem = ({ quantity, name }) => 
  <li>{ `${quantity}x ${name}` }</li>


export default InventoryItem;