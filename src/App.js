import { from } from '@apollo/client';
import React, { Component } from 'react';
import { Routes } from 'react-router-dom';
import './App.scss';
import Routing from './components/Routes/Routing';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routing/>
        <h1>Hi</h1>
      </div>
    )
  }
}

export default App;