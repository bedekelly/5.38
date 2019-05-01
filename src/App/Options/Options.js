import React from 'react';
import uuidv4 from 'uuid/v4';

import Option from './Option';

import './Options.css';


function Options({ options, chooseOption }) {
  return <section className="options">
    {
      options.length &&
      options.map(option =>
        <Option text={option.text} ifChosen={option.ifChosen} key={uuidv4()} />
      )
    }
  </section>;
}


export default Options;
