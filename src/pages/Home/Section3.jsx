import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from '../../components/Layouts/Card';

export default function Section3() {
  const [products, setProducts] = useState([]);

  // Fetch burgers from backend
  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  // Render star icons
  const renderRatingIcons = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating > 0.5) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
        rating--;
      } else if (rating > 0 && rating < 1) {
        stars.push(<i key={`half${i}`} className="bi bi-star-half"></i>);
        rating--;
      } else {
        stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
      }
    }
    return stars;
  };

  return (
    <section id="menu" className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>Our Burgers</h2>
            <p className="para">
              Browse our selection of gourmet burgers, crispy sides, and delicious drinks made fresh to order.
            </p>
          </Col>
        </Row>

        <Row>
          {products.map((cardData, index) => {
            let burgerImage;
            try {
              burgerImage = require(`../../assets/menu/${cardData.image}`);
            } catch (error) {
              console.error(`Image not found: ${cardData.image}`);
              burgerImage = ''; // fallback or empty
            }

            return (
              <Card
                key={cardData._id}
                image={burgerImage}
                title={cardData.title}
                rating={cardData.rating}
                para={cardData.paragraph}
                price={cardData.price}
                renderRatingIcons={renderRatingIcons}
              />
            );
          })}
        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">Learn More</Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>BURGER</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">Learn More</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
