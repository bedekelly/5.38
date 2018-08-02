import React from 'react';

import InventoryItem from './InventoryItem';

import './Inventory.css';


const Inventory = ({ items }) =>
  <section className="inventory">
    <h1>Inventory</h1>
    <ul>
      { 
        items.map(item =>
          <InventoryItem {...item} />
        )
      }
    </ul>
  </section>
  

export default Inventory;
