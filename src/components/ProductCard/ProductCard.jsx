import React, { Component } from 'react';
import './ProductCard.scss';

export class ProductCard extends Component {
    render() {
        return (
            <div className="ProductCard">
                <img className='ProductCard-image' 
                    src={this.props.image} alt="image" 
                />
                <div className='ProductCard-info'>
                    <h2 className='ProductCard-info-tittle'>
                        {this.props.name}
                    </h2>
                    <h3 className='ProductCard-info-price'>
                        {this.props.price}
                    </h3>
                </div>
            </div>
        ) 
    }
}

export default ProductCard;
