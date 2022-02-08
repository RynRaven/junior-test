import React, { Component } from 'react';
import './CartPage.scss';

export class CartPage extends Component {
  render() {
    return (
    <div className='CartPage'>
        <h1 className='CartPage-heading'>Cart</h1>
        <div className='CartPage__container'>
          <div className='CartPage__container_product'>
            <div className='CartPage__container_product-left'>
              <div className='CartPage__container_product-left-info'>
                <h1>Brand</h1>
                <h3>Name</h3>
              </div>
                <h4>$50.00 </h4>
              <div className='CartPage__container_product-left-attributes'>
                <span>
                  <h4>S</h4>
                </span>
                <span>
                  <h4>M</h4>
                </span>
                <span>
                  <h4>L</h4>
                </span>
              </div>
            </div>
            <div className='CartPage__container_product-right'>
              <div className='CartPage__container_product-right-count'>
                <span>+</span>
                <h1>1</h1>
                <span>-</span>
              </div>
              <div className='CartPage__container_product-right-image'>
                <img src="https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&dpr=2&h=450&w=760" alt="gallery/image" />
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default CartPage;
