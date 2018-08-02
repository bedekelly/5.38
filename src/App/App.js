import React from 'react';

import { LeftBar, Main, RightBar } from './layout';

import initialState from './initialState.json';

import './App.css';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = initialState;
    this.chooseOption = this.chooseOption.bind(this);
  }
  
  render() {
    // Todo: find babel object destructuring plugin.
    const props = JSON.parse(JSON.stringify(this.state));
    props.chooseOption = this.chooseOption;

    return <React.Fragment>
      <LeftBar {...props} />
      <Main {...props} />
      <RightBar {...props} />
    </React.Fragment>
  }
  
  chooseOption(option) {
    console.log(`Option ${JSON.stringify(option)} clicked – not yet handled.`)
  }
  
}


export default App;