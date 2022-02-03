import React, { Component } from 'react';
import './CategoryPage';
import { Header } from '../Header/Header'

export class CategoryPage extends Component {
    render() {
        return (
            <div id='CategoryPage'>
                <Header/>
                <h1>Category Page</h1>
            </div>
        );
    }
}

export default CategoryPage;
