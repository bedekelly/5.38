import React from 'react';

import { LeftBar, Main, RightBar } from './layout';

import initialState from './initialState.json';

import './App.css';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = initialState;
    this.chooseOption = this.chooseOption.bind(this);
    this.updateOptions();
  }
  
  render() {
    const props = {...this.state, chooseOption: this.chooseOption};
    return <Main {...props} />
  }
  
  chooseOption(option) {
    console.log(`Option ${JSON.stringify(option)} clicked – not yet handled.`)
  }
  
  updateOptions() {
    const newOptions = this.state.options;
    this.state.room.items.forEach(({ name, quantity }) => {
      newOptions.push({
        text: `Pick up ${quantity}x ${name}`,
        action: () => {
          this.state.inventory.push({ name, quantity })
        }
      });
    });
    this.setState({ options: newOptions });
  }
}


export default App;