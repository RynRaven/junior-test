import { from } from '@apollo/client';
import React, { Component } from 'react';
import './App.scss';
import { Route, Link, Switch , Redirect, Routes } from 'react-router-dom';
import { CategoryPage } from './components/CategoryPage/CategoryPage';
import { ProductPage } from './components/ProductPage/ProductPage';
import { CartPage } from './components/CartPage/CartPage';
import { ErrorPage } from './components/ErrorPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CategoryPage />}></Route>
          <Route exact path="/ProductPage" element={<ProductPage />}></Route>
          <Route exact path="/CartPage" element={<CartPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <h1>Page</h1>
      </div>
    )
  }
}

export default App;