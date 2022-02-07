import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCurrencyDollar , BsCurrencyEuro , BsCurrencyYen } from 'react-icons/bs';

export class Header extends Component {
    render() {
        return (
            <div className='surface'>
                <div className='surface-navigation'>
                    <ul>
                        <li>
                            <Link to="/">All</Link>
                        </li>
                        <li>
                            <Link to="/#clothes">Clothes</Link>
                        </li>
                        <li>
                            <Link to="/#tech">Tech</Link>
                        </li>
                    </ul>
                </div>
                <div className='surface-logo'>
                    <img src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png" alt="logo"  />
                </div>
                <div className='surface-actions'>
                    <a href="#">
                        <BsCurrencyEuro size={25}/>
                    </a>
                    <Link to="/CartPage">
                        <AiOutlineShoppingCart size={25}/>
                    </Link>
                </div>
            </div>
        )
        
    }
}

export default Header;
