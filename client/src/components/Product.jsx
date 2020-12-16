//jshint esversion:10

import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Products = ({ product }) => {
    return <>
        <Card className="my-1 p-3 rounded shadow-lg">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} height='174' variant="top" />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        {product.name.length > 37 ? <strong>{(product.name).slice(0,37)+'...'}</strong>:<strong>{product.name} <br/></strong>}
                        
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <Rating 
                        value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
</>
}

export default Products
