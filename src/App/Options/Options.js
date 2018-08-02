import React from 'react';

import Option from './Option';

import './Options.css';


const Options = ({ options, chooseOption }) =>
  <section className="options">
    { 
      (options || []).map(
        option => <Option text={option} ifChosen={() => chooseOption(option)} />
      )
    }
  </section>
  

export default Options;
