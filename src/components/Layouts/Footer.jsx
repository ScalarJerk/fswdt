import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import {Col, Container, Row} from "react-bootstrap"
import "../../styles/HomeStyle.css"

export default function Footer() {

  const [isVisible,setIsVisible] = useState(false);

  const scrollTop = ()=>{

    window.scrollTo({
      top:0,
      behaviour : "smooth"
    });

  };

  const listenToScroll=()=>{

    let heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);

  }

  useEffect(()=>{

    window.addEventListener("scroll",listenToScroll);

  })

  return (
    <>
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
            <h5 className="fw-bold mb-3">📍 Location</h5>
<p>123 Burger Lane, Foodie Street</p>
<p>Near Central Plaza, New Delhi - 110001</p>
<p>India</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Working Hours</h5>
              <p>Mon to Fri : 9:00 to 7:00</p>
              <p>Saturday: 10:00 to 8:30</p>
              <p>Sunday: 10:00 to 8:30</p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Order Now</h5>
              <p>Call us at</p>
              <p><Link to="tel:9998389431" className="calling">9998389431</Link></p>
            </div>
          </Col>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
            <div className="text-center">
              <h5>Follow Us</h5>
              <p></p>
              <ul className='list-unstyled'>
                <li>
                  <Link to="/">
                    <i className="bi bi-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="bi bi-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="bi bi-twitter"></i>
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    <i className="bi bi-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className='copyright'>
          <ul className='list-unstyled text-center m-0'>
            <li>
              <Link to="/">
                @ 2024 <span>WEB TECH FISAC</span> All Rights Reserved
              </Link>
            </li>
            <li>
              <Link to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/">
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link to="/">
                Privacy Policy
              </Link>
            </li>
          </ul>

        </Row>
      </Container>
    </footer>
    {/* Scroll top */}

    {
      isVisible && (
      <div className='scroll_top' onClick={scrollTop}>
        <i className='bi bi-arrow-up'></i>
      </div>
      )
    }

    </>
  )
}
