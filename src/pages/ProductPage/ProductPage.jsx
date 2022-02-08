import React, { Component } from 'react';
import './ProductPage.scss';

export class ProductPage extends Component {
  render() {
    return <div className='ProductPage'>
        <div className='ProductPage__container'>
          <div className='ProductPage__container-gallery'>
            <img src="https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&dpr=2&h=150&w=460" alt="gallery/image" />
            <img src="https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&dpr=2&h=150&w=460" alt="gallery/image" />
            <img src="https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&dpr=2&h=150&w=460" alt="gallery/image" />
          </div>
          <div className='ProductPage__container-image'>
            <img src="https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&dpr=2&h=450&w=760" alt="preview picture" />
          </div>
          <div className='ProductPage__container_information'>
            <div className='ProductPage__container_information-tittle'>
              <h1>Brand</h1>
              <h3>Name</h3>
            </div>
            <div className='ProductPage__container_information-size'>
              <h4>Size: </h4>
              <div className='ProductPage__container_information-size-cont'>
                <span>
                  <h5>XS</h5>
                </span>
                <span>
                  <h5>S</h5>
                </span>
                <span>
                  <h5>M</h5>
                </span>
                <span>
                  <h5>L</h5>
                </span>
              </div>
            </div>
            <div className='ProductPage__container_information-price'>
              <h4>Price: </h4>
              <span>$50.00</span>
            </div>
            <button>Add to cart</button>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum inventore aperiam est iure dolore dignissimos atque officia dolorum ea suscipit!</p>
          </div>
        </div>
    </div>;
  }
}

export default ProductPage;
