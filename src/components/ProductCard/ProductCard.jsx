import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

export class ProductCard extends Component {
    render() {
        return (
            <div className="ProductCard">
                <Link to="/ProductPage">
                    <img className='ProductCard-image' 
                    src={this.props.image} alt="image" 
                />
                </Link>
                <div className='ProductCard-info'>
                    <h2 className='ProductCard-info-tittle'>
                        {this.props.name}
                    </h2>
                    <h3 className='ProductCard-info-price'>
                        {this.props.price}
                    </h3>
                    <div className='ProductCard-info-addcart'>
                        <a href="#">
                            <span>
                                <img src="https://cdn-icons.flaticon.com/png/512/3821/premium/3821187.png?token=exp=1644229908~hmac=d3533e727161d46d68f77177c6266d9d" alt="add_cart" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default ProductCard;
