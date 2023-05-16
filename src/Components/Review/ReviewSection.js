import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./ReviewSection.css";

const ReviewSection = () => {
    return (
      <section className="py-5 custom-review-section">
        <Container>
          <h2 className="text-center mb-5">Customer Reviews</h2>
          <Row className="gx-5">
            <Col md="4" className="mb-4">
              <Card>
                <Card.Body className="custom-review">
                  <Card.Title>Loved the course</Card.Title>
                  <Card.Text>
                  I just finished the Python programming course and it was so cool! The instructor was really nice and funny. I loved learning how to make my own games and programs using Python. The course was also really interactive and there were lots of fun quizzes and challenges that helped me learn even more.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="custom-review">
                  <small className="text-muted">Harkirat, 16 years</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col md="4" className="mb-4">
              <Card className="custom-review">
                <Card.Body className="custom-review">
                  <Card.Title>Excellent service</Card.Title>
                  <Card.Text>
                  The course was well-structured and started with the basics.Instructor , Mr Masum made it all very interactive with fun exercises and quizzes.I recommend this web development course for any parent looking to introduce their child to the world of programming and web development
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="custom-review">
                  <small className="text-muted">Parents of Jaeden</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col md="4" className="mb-4">
              <Card className="custom-review">
                <Card.Body className="custom-review">
                  <Card.Title>Highly recommend</Card.Title>
                  <Card.Text >
                  My child recently completed a Scratch course and I am so impressed with how much he learned.The instructor was very patient, enthusiastic, and really knew how to explain concepts in a way that kids could understand.Recommend this course to everyone who want to learn programming!
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="custom-review">
                  <small className="text-muted">Parents of Jane</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
  
export default ReviewSection;
