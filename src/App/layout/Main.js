import React from 'react';

import RoomInfo from '../RoomInfo';
import Options from '../Options';
import Ledger from '../Ledger';


const Main = props =>
  <section className="main">
    <RoomInfo {...props.room} />
    <Ledger entries={props.ledgerEntries} />
    <Options options={props.options} chooseOption={props.chooseOption} />
  </section>


export default Main;