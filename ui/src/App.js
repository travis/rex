import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Claims from './Claims'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">welcome to rex</h1>
        </header>
        <Claims/>
      </div>
    );
  }
}

export default App;
