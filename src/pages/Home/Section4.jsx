import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PromotionImage from "../../assets/promotion/pro.png"

export default function Section4() {
  return (

    <>
        <section className='promotion_section'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} className='text-center mb-5 mb-lg-0'>
                        <img src={PromotionImage} className='img-fluid' alt="" />
                    </Col>
                    <Col lg={6} className='px-5'>
  <h2>Nothing brings people together like a good burger</h2>
  <p>
    Our handcrafted burgers aren't just food—they're experiences made with passion,
    fresh ingredients, and a whole lot of flavor. Whether it's family night or a solo craving,
    we've got your hunger covered.
  </p>
  <ul>
    <li><p>🍔 Made with 100% fresh, premium-quality ingredients.</p></li>
    <li><p>🧀 Melt-in-your-mouth cheese and crispy veggies with every bite.</p></li>
    <li><p>🚚 Fast and hot doorstep delivery within minutes.</p></li>
    <li><p>🌱 Options available for both meat lovers and vegetarians.</p></li>
    <li><p>⭐ Loved by thousands of happy customers and foodies alike.</p></li>
  </ul>
</Col>
                </Row>
            </Container>
        </section>

        {/* Paralax */}

        <section className="bg_parallax_scroll">

        </section>




    </>




  )
}
