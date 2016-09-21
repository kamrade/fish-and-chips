import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StorePicker from './components/storePicker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StorePicker />
      </div>
    );
  }
}



export default App;
