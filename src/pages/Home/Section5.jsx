import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import IOS from "../../assets/shop/appstore.png"
import Android from "../../assets/shop/googleplay.png"
import Download from "../../assets/shop/e-shop.png"
import Carousel from 'react-bootstrap/Carousel';
import brand1 from "../../assets/brands/brand-11.png";
import brand2 from "../../assets/brands/brand-12.png";
import brand3 from "../../assets/brands/brand-13.png";
import brand4 from "../../assets/brands/brand-14.png";
import brand5 from "../../assets/brands/brand-15.png";
import brand6 from "../../assets/brands/brand-16.png";
import brand7 from "../../assets/brands/brand-17.png";
import brand8 from "../../assets/brands/brand-18.png";

export default function Section5() {
  return (
    <>
       <section id="shop" className="shop_section">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                        <h4>Download Mobile App and</h4>
                        <h2>Save up to 20%</h2>
                        <p>
                        Enjoy exclusive app-only deals, faster ordering,
                        Get your favorite burgers delivered hot & fresh—plus save up to 20% on every order!
                        </p>
                        <Link to="/">
                            <img src={IOS} className="me-3 img-fluid store" alt="" />
                        </Link>
                        <Link to="/">
                            <img src={Android} className="me-3 img-fluid store" alt="" />
                        </Link>
                    </Col>
                    <Col lg={6}>
                        <img src={Download} className='img-fluid' alt="" />
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="brand_section">
            <Container>
                <Row>
                    <Carousel controls={true} indicators={false} indicatorLabels={false} slide={true}>
                        <Carousel.Item>

                            <div className="d-flex align-items-center justify-content-between">
                                <div className="brand-img">
                                    <img src={brand1} className="img-fluid" alt="" />
                                </div>
                                <div className="brand-img">
                                    <img src={brand2} className="img-fluid" alt="" />
                                </div>
                                <div className="brand-img">
                                    <img src={brand3} className="img-fluid" alt="" />
                                </div>
                                <div className="brand-img">
                                    <img src={brand4} className="img-fluid" alt="" />
                                </div>
                                <div className="brand-img">
                                    <img src={brand5} className="img-fluid" alt="" />
                                </div>
                                <div className="brand-img">
                                    <img src={brand6} className="img-fluid" alt="" />
                                </div>
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>

                            <div className="d-flex align-items-center justify-content-between">
                                <div className="brand-img">
                                    <img src={brand3} className="img-fluid" alt="" />
                                </div>
                                <div className="brand-img">
                                    <img src={brand4} className="img-fluid" alt="" />
                                </div>
                                <div className="brand-img">
                                    <img src={brand5} className="img-fluid" alt="" />
                                </div>
                                <div className="brand-img">
                                    <img src={brand6} className="img-fluid" alt="" />
                                </div>
                                <div className="brand-img">
                                    <img src={brand7} className="img-fluid" alt="" />
                                </div>
                                <div className="brand-img">
                                    <img src={brand8} className="img-fluid" alt="" />
                                </div>
                            </div>

                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>

        </section>
    </>


  )
}
