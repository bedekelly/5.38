import React from 'react';

import Title from './Title';
import Subtitle from './Subtitle';
import Description from './Description';

import './RoomInfo.css';


const RoomInfo = ({ title, subtitle, description }) => 
  <section className="room-info">
    <Title text={title} />
    <Subtitle text={subtitle} />
    <Description text={description} />
  </section>
  

export default RoomInfo;