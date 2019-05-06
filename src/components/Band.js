import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>

        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>Delete</button>

      </div>
    );
  }
};

export default Band;
