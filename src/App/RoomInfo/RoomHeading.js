import React from 'react';

import RoomTitle from './RoomTitle';
import RoomSubtitle from './RoomSubtitle';

import './RoomHeading.css';


function RoomHeading({ title, subtitle }) { 
  return <section className="room-heading">
    <div className="header-group">
      <RoomTitle text={title} />
      <RoomSubtitle text={subtitle} />
    </div>
  </section>;
}


export default RoomHeading;