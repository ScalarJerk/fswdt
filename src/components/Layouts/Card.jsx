import React, { useContext } from 'react';
import { Col, Card as BootstrapCard, Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

export default function Cards(props) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const item = {
      image: props.image,
      title: props.title,
      para: props.para,
      price: props.price,
    };
    console.log("🛒 Adding to cart:", item); // Debug log
    addToCart(item);
  };

  return (
    <Col sm={6} lg={4} xl={3} className='mb-4'>
      <BootstrapCard className='overflow-hidden'>
        <div className='overflow-hidden'>
          <BootstrapCard.Img variant="top" src={props.image} />
        </div>

        <BootstrapCard.Body>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='item_rating'>{props.renderRatingIcons(props.rating)}</div>
            <div className='wishlist'>
              <i className='bi bi-heart'></i>
            </div>
          </div>

          <BootstrapCard.Title>{props.title}</BootstrapCard.Title>
          <BootstrapCard.Text>{props.para}</BootstrapCard.Text>

          <div className='d-flex align-items-center justify-content-between'>
            <div className='menu_price'>
              <h5 className='mb-0'>₹{props.price}</h5>
            </div>
            <div className='add_to_cart'>
              <Button onClick={handleAddToCart} variant="warning" size="sm">
                <i className='bi bi-bag me-2'></i>
                Add to Cart
              </Button>
            </div>
          </div>
        </BootstrapCard.Body>
      </BootstrapCard>
    </Col>
  );
}
