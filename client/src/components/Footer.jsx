import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {

    return <>
        <div className="mt-5"></div>
        <footer className="bg-dark fixed-bottom">
            <Container>
                <Row>
                    <Col className="text-center py-3 text-white">
                        Copyright &copy; {new Date().getFullYear()} ProShop
                    </Col>
                </Row>
            </Container>
        </footer>
</>
}

export default Footer
