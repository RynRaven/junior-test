import React, { Component } from 'react';
import { Route, Link , Redirect, Routes, Router } from 'react-router-dom';
import { Header } from '../Header/Header';

import { CategoryPage } from '../../pages/CategoryPage/CategoryPage';
import { ProductPage } from '../../pages/ProductPage/ProductPage';
import { CartPage } from '../../pages/CartPage/CartPage';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';

export default class Routing extends Component {
    render() {
        return (
            <div>
                <Header />
                <Routes>
                    <Route exact path="/" element={<CategoryPage />}></Route>
                    <Route exact path="/ProductPage" element={<ProductPage />}></Route>
                    <Route exact path="/CartPage" element={<CartPage />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </div>
        );
    }
}
