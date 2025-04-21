import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Section7() {
  return (
    <section id="contact" className="contact_section">
        <Container>
            <Row className='justify-content-center'>
                <Col sm={8} className='text-center'>
                    <h4>We Gurrantee</h4>
                    <h2>30 MINUTES DELIVERY</h2>
                    <p>Enjoy hot, fresh food delivered to your doorstep in 30 minutes or less — or it's on us!
                    We value your time and appetite.</p>
                    <Link to="/" className='btn btn_red px-4 py-2 rounded-0'>
                        Call : 999-888-3333
                    </Link>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
