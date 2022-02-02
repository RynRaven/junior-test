import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.scss';
import ProductCard from './components/ProductCard/ProductCard';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <h1>Hi</h1>
        <ProductCard/>
      </div>
    )
  }
}

export default App;