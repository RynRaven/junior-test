import React, { Component } from 'react';
import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <div className='surface'>
                <div className='surface-navigation'>
                    <p><a href="#women">Women</a></p>
                    <p><a href="#men">Men</a></p>
                    <p><a href="#Kids">Home</a></p>
                </div>
                <div className='surface-logo'>
                    <img src="#" alt="logo" />
                </div>
                <div className='surface-actions'>
                    <a href="#">
                        <img src="icon" alt="icon" />
                    </a>
                    <a href="#cart">
                        <img src="icon" alt="icon" />
                    </a>
                </div>
            </div>
        )
        
    }
}

export default Header;
