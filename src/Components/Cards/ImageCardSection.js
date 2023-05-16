import React from 'react';
import { Container, Row, Col, Card, TabContent, Button } from 'react-bootstrap';
import {Route,Routes,useNavigate} from "react-router-dom";
import "../../Components/Cards/ImageCardsSection.css";

const ImageCardSection = () => {
  const navigate = useNavigate();
  const navigatePython = () =>{
    return navigate("/python");
  }
  const navigateScratch = () =>{
    return navigate("/scratch");
  }
  const navigateAppInventor = () =>{
    return navigate("/app");
  }
  const navigateJava = () =>{
    return navigate("/java");
  }
  const navigateWeb = () =>{
    return navigate("/web");
  }
  const navigateMath = () =>{
    return navigate("/math");
  }
  return (
    <section className="py-5" class='custom-courses'>
      <Container>
        <h2 className="text-center space-around" style={{fontFamily:Animation}}>Our Courses</h2>
        <Row className="gx-5 justify-content-center align-items-center space-around custom-row">
          <Col md="6" lg="3" className="mb-9">
            <Card className="custom-card">
              <Card.Img variant="top" src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/06/Python-Programming-Edureka.png" />
              <Card.Body>
                <Card.Title>Python</Card.Title>
                <Card.Text>
                  Learn the best of python programming , from beginner to advanced!
                </Card.Text>
                <Button className='btn-custom' onClick={navigatePython}>Course Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="3" className="mb-9" >
            <Card className='custom-card'>
              <Card.Img variant="top" src={require('./MiniWeb.jpg')} />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                Learn the best of python programming , from beginner to advanced!
                </Card.Text>
                <Button onClick={navigateWeb}>Course Details</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md="6" lg="3" className="mb-9">
            <Card className='custom-card'>
              <Card.Img variant="top" src={require('./Scratch.jpg')} />
              <Card.Body>
                <Card.Title>Scratch</Card.Title>
                <Card.Text>
                Learn the best of python programming , from beginner to advanced!
                </Card.Text>
                <Button onClick={navigateScratch}>Course Details</Button>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          <Row className="gx-5 justify-content-center align-items-center">
          <Col md="6" lg="3" className="mb-9" >
            <Card className='custom-card'>
              <Card.Img variant="top" src={require('./MiniMit.png')} />
              <Card.Body>
                <Card.Title>MIT App Inventor</Card.Title>
                <Card.Text>
                Learn the best of python programming , from beginner to advanced!
                 
                </Card.Text>
                <Button onClick={navigateAppInventor}>Course Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="3" className="mb-9" >
            <Card className='custom-card'>
              <Card.Img variant="top" src={require('./MiniMath.png')} />
              <Card.Body>
                <Card.Title>Math Wizard</Card.Title>
                <Card.Text>
                Learn the best of python programming , from beginner to advanced!
      
                </Card.Text>
                <Button onClick={navigateMath}>Course Details</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md="6" lg="3" className="mb-9">
            <Card>
              <Card.Img variant="top" src={require('./MiniJava.png')} />
              <Card.Body>
                <Card.Title>Java </Card.Title>
                <Card.Text>
                Learn the best of python programming , from beginner to advanced!
                </Card.Text>
                <Button onClick={navigatePython}>Course Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ImageCardSection;
