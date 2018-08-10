import React from 'react';

import { RoomHeading, RoomDescription } from '../../RoomInfo';
import Ledger from '../../Ledger';
import Options from '../../Options';
import { VerticalScroll, HorizontalScroll } from '../Scrolling';


function MobileLayout({ room, ledgerEntries, options, chooseOption }) {
  return (
    <React.Fragment>

      <RoomHeading title={room.title} subtitle={room.subtitle} />

      <VerticalScroll maxHeight={"58vh"}>
        <RoomDescription text={room.description} />
        <Ledger entries={ledgerEntries}></Ledger>
      </VerticalScroll>

      <HorizontalScroll maxHeight={"20vh"}>
        <Options options={options} chooseOption={chooseOption}></Options>
      </HorizontalScroll>

    </React.Fragment>
  );
}


export default MobileLayout;
