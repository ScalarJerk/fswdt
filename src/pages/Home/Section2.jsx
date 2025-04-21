import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `Made with our authentic recipe that stands the test of time.`,
    },
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: `We use only fresh, top-grade ingredients in all our dishes.`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `Hot and fresh burgers delivered to your doorstep in no time.`,
    },
    // Add more mock data objects as needed
  ];




export default function Section2() {
  return (
    <>
       <section id="about" className="about_section">

            <Container>
                <Row>
                    <Col lg={{span:8,offset:2}} className='text-center'>
                        <h2>The Burger taste better when you eat it with your family</h2>
                        <p>At TastyBurger, we believe in serving happiness between buns. Fresh ingredients, bold flavors, and a passion for quality make every bite memorable.</p>
                        <Link to="/" className='btn order_now btn_red'>
                            Explore Full Menu
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="about_wrapper">
            <Container>
                <Row className="justify-content-center">
                    {
                        mockData.map((cardData,index)=>(

                            <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>

                                <div className="about_box text-center">
                                    <div className="about_icon">
                                        <img src={cardData.image} className="img-fluid" alt="" />
                                    </div>
                                    <h4>{cardData.title}</h4>
                                    <p>{cardData.paragraph}</p>
                                </div>

                            </Col>

                        ))
                    }

                </Row>
            </Container>
        </section>


    </>
  )
}