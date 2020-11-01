import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from './../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './../components/Loader';
import Message from './../components/Message';
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({history, match }) => {

    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails;

    useEffect(() => {

        dispatch(listProductDetails(match.params.id));

    }, [dispatch, match]);

    const addToCartHandler = () =>{
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    };

    console.log(qty);

    return <>
        <Link to="/" className="btn btn-light my-3">
            Go Back
        </Link>
        {loading ? <Loader /> : error ? <Message varient="danger">{error}</Message> : (
            <Row>
                <Col xl={6} md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col xl={3} md={6}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews}`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xl={3} md={6} className="mt-5" >
                    <Card>
                        <ListGroup.Item>
                            <Row>
                                <Col> Price:</Col>
                                <Col><strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                            </Row>
                        </ListGroup.Item>

                        {product.countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                        <Form.Control as='select' value={qty} onChange={e => setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map(x => (
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )}

                        <ListGroup.Item>
                            <Button 
                            className="btn-block" 
                            type='button' 
                            disabled={product.countInStock === 0 ? true : false}
                            onClick={addToCartHandler}
                            >
                                Add To Cart
                        </Button>
                        </ListGroup.Item>
                    </Card>
                </Col>
            </Row>
        )}
    </>
}

export default ProductScreen