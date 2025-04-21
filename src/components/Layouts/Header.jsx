import React, { useState } from 'react';
import "../../styles/HeaderStyle.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo.png";


export default function Header() {

  const [nav,setNav] = useState(false);

  //Scroll Navbar
  const changeValueOnScroll = () =>{
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue>100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);




  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" className={`${nav===true ? "sticky" : "" }`}>
          <Container>

            <Navbar.Brand href="#home">
              <Link to="/" className='logo'>
                <img src={logo} alt="" className="img-fluid" />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              {/* <Nav.Link href="#cart">Cart</Nav.Link> */}
                <Nav.Link as={Link} to="/cart">
                  <div className="cart">
                    <i className='bi bi-bag fs-5'></i>
                    <em className='roundpoint'>2</em>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </header>
    </>
  )
}
