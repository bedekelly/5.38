import React from 'react';

import Title from './Title';
import Subtitle from './Subtitle';
import Description from './Description';

import './RoomInfo.css';


function RoomInfo({ title, subtitle, description }) { 
  return <section className="room-info">
    <Title text={title} />
    <Subtitle text={subtitle} />
    <Description text={description} />
  </section>;
}


export default RoomInfo;