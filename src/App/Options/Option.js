import React from 'react';

import './Option.css';


function Option({ text, ifChosen }) {
  return <button className="option" onClick={ifChosen}>
    { text }
  </button>;
}


export default Option;