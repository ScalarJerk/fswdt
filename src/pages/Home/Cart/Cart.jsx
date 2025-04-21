import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <Row>
            {cart.map((item, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.para}</Card.Text>
                    <h5>₹{item.price}</h5>

                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove from Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Link to="/order-summary">
              <Button variant="success" size="lg">
                Execute Order
              </Button>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
}
