import React, { Component } from 'react';
import './App.scss';
import './bootstrap.scss';
import ScorePad from './containers/ScorePad';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ScorePad/>
      </div>
    );
  }
}

export default App;
