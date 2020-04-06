import React, { Component } from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  handleClick = () => {
    this.ScrollBox.scrollToBottom();
  };

  render() {
    return (
      <div>
        {/* <ValidationSample /> */}
        <ScrollBox ref={(ref) => {this.ScrollBox=ref;}}/>
        <button onClick={this.handleClick}>
          맨 밑으로
        </button>
      </div>
    );
  }
};

export default App;