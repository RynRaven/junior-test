import React, { Component } from 'react';
import Directory from '../../components/Directory/Directory';
import './CategoryPage.scss';

export class CategoryPage extends Component {

    render() {
        return (
            <div id='CategoryPage'>
                <h1>Category name</h1>
                <Directory/>
            </div>
        );
    }
}

export default CategoryPage;
