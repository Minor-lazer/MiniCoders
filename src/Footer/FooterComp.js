import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import  "./FooterComp.css";

const FooterComp = () => {
  return (
    <>
    <footer className="py-3 custom-footer">
      <Container>
        <Row>
          <Col md="4">
            <h4>Address</h4>
            <p>1234 Main Street</p>
            <p>Anytown, USA 12345</p>
          </Col>
          <Col md="4">
            <h4>Connect with Us</h4>
            <ul className="list-unstyled d-flex justify-content-start icon-container">
            
              <li className="me-3"><a href="#"><FaFacebook className='facebook-icon'/></a></li>
             
              <li className="me-3"><a href="#"><FaTwitter className='twitter-icon' /></a></li>
              <li className="me-3"><a href="#"><FaInstagram className='instagram-icon' /></a></li>
              <li className="me-3"><a href="#"><FaLinkedin className='linkedin-icon' /></a></li>
            </ul>
          </Col>
          <Col md="4" className="text-md-end">
            <h4>Links</h4>
            <ul className="list-unstyled  justify-content-end" style={{color:"white",padding:0,margin:0,textDecoration:"none",direction:"ltr"}}> 
              <li className="ms-3"  ><a href="#" style={{color:"white",textDecoration:"none",direction:"ltr"}}>About Us</a></li>
              <li className="ms-3"><a href="#"  style={{color:"white",textDecoration:"none",direction:"ltr"}}>Contact Us</a></li>
              <li className="ms-3"><a href="#"  style={{color:"white",textDecoration:"none",direction:"ltr"}}>Terms of Use</a></li>
              <li className="ms-3"><a href="#"  style={{color:"white",textDecoration:"none",direction:"ltr"}}>Privacy Policy</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  );
};

export default FooterComp;




