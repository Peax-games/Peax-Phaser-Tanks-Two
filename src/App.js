import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import tanksTwo from './Game/tanksTwo';

class App extends Component {
  render() {
    tanksTwo();
    return (
      <div id="myCanvas">
      </div>
    );
  }
}

export default App;
