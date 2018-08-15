import React from 'react';


class MediaQuery extends React.Component {
  
  constructor(props) {
    super(props);
    const event = window.matchMedia(this.props.query);
    event.addListener(this.updateMatch.bind(this));
    this.state = { visible: event.matches };
    this.updateMatch(event);
  }
  
  render() {
    return this.state.visible ? this.props.children : null;
  }
  
  updateMatch(mediaMatch) {
    this.state.visible = mediaMatch.matches;
  }

}


export default MediaQuery;
