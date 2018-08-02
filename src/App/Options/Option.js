import React from 'react';


const Option = ({ text, ifChosen }) =>
  <button onClick={ifChosen}>
    { text }
  </button>

export default Option;