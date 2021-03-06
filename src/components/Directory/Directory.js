import React, { Component } from 'react';
import './Directory.scss';
import ProductCard from '../ProductCard/ProductCard';
import { PROD_QUERY } from '../GraphQL/Queries';
import { useQuery } from '@apollo/client';


function Directory() {
    const { loading, error, data } = useQuery(PROD_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.category.products.map(({ id, name , gallery, amount}) => {
        return (
            <ProductCard key={id} name={name} image={gallery[0]} price={amount}/>
        )
        
        });
};

export default Directory;

/*export class Directory extends Component {
    constructor(){
        super();
        this.state = {
            //need data from query
            sections: [
                {
                    tittle: 'thing1',
                    price: '400',
                    imageUrl: 'https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
                    id: 1},
                {
                    tittle: 'thing2',
                    price: '300',
                    imageUrl: 'https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
                    id: 2},
                {
                    tittle: 'thing3',
                    price: '200',
                    imageUrl: 'https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
                    id: 3},
                {
                    tittle: 'thing4',
                    price: '500',
                    imageUrl: 'https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
                    id: 4},
                {
                    tittle: 'thing5',
                    price: '200',
                    imageUrl: 'https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
                    id: 5},
                {
                    tittle: 'thing6',
                    price: '1500',
                    imageUrl: 'https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
                    id: 6},
            ]
        }
    }
    render() {
    return (
        <div className='directory'>
            { this.state.sections.map(({tittle, price, id, imageUrl}) => (
                <ProductCard key={id} name={tittle} price={price} image={imageUrl}
                href={id}/>
            )
                )}

        </div>
    );
    }
}

export default Directory;*/
