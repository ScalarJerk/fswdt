import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import user1 from "../../assets/blog/review-author-1.jpg"
import user2 from "../../assets/blog/review-author-2.jpg"
import user3 from "../../assets/blog/review-author-3.jpg"
import user4 from "../../assets/blog/review-author-5.jpg"

export default function Section6() {
  return (
    <section id="blog" className="blog_section py-5 bg-light">
      <Container>
        <Row>
          <Carousel controls indicators={false} fade slide>
            <Carousel.Item className="text-center px-4">
              <div className="user_img mb-3">
                <img src={user1} className="img-fluid rounded-circle" alt="Emily Sam" width="100" />
              </div>
              <p className="lead">
                “The burgers were absolutely delicious! Fresh ingredients, fast delivery, and super friendly staff.”
              </p>
              <div className="item_rating mb-2 text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h5 className="fw-bold">— Emily Sam</h5>
            </Carousel.Item>

            <Carousel.Item className="text-center px-4">
              <div className="user_img mb-3">
                <img src={user2} className="img-fluid rounded-circle" alt="David Lee" width="100" />
              </div>
              <p className="lead">
                “Honestly one of the best food delivery experiences I’ve had. Hot, tasty, and on time.”
              </p>
              <div className="item_rating mb-2 text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h5 className="fw-bold">— David Lee</h5>
            </Carousel.Item>

            <Carousel.Item className="text-center px-4">
              <div className="user_img mb-3">
                <img src={user3} className="img-fluid rounded-circle" alt="John Smith" width="100" />
              </div>
              <p className="lead">
                “Highly recommended! Amazing flavors and very affordable prices. Will order again soon.”
              </p>
              <div className="item_rating mb-2 text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h5 className="fw-bold">— John Smith</h5>
            </Carousel.Item>

            <Carousel.Item className="text-center px-4">
              <div className="user_img mb-3">
                <img src={user4} className="img-fluid rounded-circle" alt="Samantha Ray" width="100" />
              </div>
              <p className="lead">
                “The food was fresh, well-packed, and arrived earlier than expected. Great job guys!”
              </p>
              <div className="item_rating mb-2 text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h5 className="fw-bold">— Samantha Ray</h5>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  )
}
