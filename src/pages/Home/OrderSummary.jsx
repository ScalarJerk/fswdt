import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

export default function OrderSummary() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Order Summary</h2>

      {cart.length === 0 ? (
        <p className="text-center">No items in cart.</p>
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
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <hr />
          <h4 className="text-end">Total Amount: ₹{total}</h4>
        </>
      )}
    </Container>
  );
}
