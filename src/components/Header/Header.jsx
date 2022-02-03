import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <div className='surface'>
                <div className='surface-navigation'>
                    <Link to="/">WOMEN</Link>
                    <p><a href="#men">Men</a></p>
                    <p><a href="#Kids">Home</a></p>
                </div>
                <div className='surface-logo'>
                    <img src="#" alt="logo"  />
                </div>
                <div className='surface-actions'>
                    <a href="#">
                        <img src="icon" alt="icon" />
                    </a>
                    <Link to="/CartPage">
                        <img src="#" alt="icon" />
                    </Link>
                </div>
            </div>
        )
        
    }
}

export default Header;
