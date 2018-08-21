import React from 'react';

import Inventory from '../../Inventory';
import { RoomHeading, RoomDescription } from '../../RoomInfo';
import Ledger from '../../Ledger';
import Options from '../../Options';
import { VerticalScroll, HorizontalScroll } from '../Scrolling';


function DesktopLayout({ inventory, room, ledgerEntries, options, chooseOption }) {
  return (
    <React.Fragment>
      <Inventory items={inventory} />
      <RoomHeading {...room} />
      <RoomDescription text={room.description} />
      <VerticalScroll gridArea="ledger" maxHeight="30vh">
        <Ledger entries={ledgerEntries} />
      </VerticalScroll>
      <HorizontalScroll gridArea="options" maxWidth="19vh">
        <Options options={options} chooseOption={chooseOption}/>
      </HorizontalScroll>
    </React.Fragment>
  );
}


export default DesktopLayout;
