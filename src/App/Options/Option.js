import React from 'react';


function Option({ text, ifChosen }) {
  return <button onClick={ifChosen}>
    { text }
  </button>;
}


export default Option;