import React from 'react';
import uuidv4 from 'uuid/v4';

import InventoryItem from './InventoryItem';

import './Inventory.css';


function Inventory({ items }) {
  return <section className="inventory">
    {/* <h3>Inventory</h3> */}
    <ul className="inventory-list">
      {
        items.map(item =>
          <InventoryItem key={uuidv4()} {...item} />
        )
      }
    </ul>
  </section>
}

export default Inventory;
