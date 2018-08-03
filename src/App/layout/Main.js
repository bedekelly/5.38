import React from 'react';

import RoomTitle from '../RoomInfo/RoomTitle';
import RoomSubtitle from '../RoomInfo/RoomSubtitle';
import RoomDescription from '../RoomInfo/RoomDescription';
import Options from '../Options';
import Ledger from '../Ledger';
import Scrollable from './Scrollable.js';

import './Main.css';


function Main(props) {
  return <section className="main">
    <RoomTitle text={props.room.title}></RoomTitle>
    <RoomSubtitle text={props.room.subtitle}></RoomSubtitle>
    <Scrollable maxHeight={150}>
      <RoomDescription text={props.room.description} />
      <Ledger entries={props.ledgerEntries} />
    </Scrollable>
    <Options options={props.options} chooseOption={props.chooseOption} />
  </section>;
}


export default Main;