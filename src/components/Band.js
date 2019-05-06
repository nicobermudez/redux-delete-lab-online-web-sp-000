import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <span>{this.props.band}</span>
      </div>
    );
  }
};

export default Band;
