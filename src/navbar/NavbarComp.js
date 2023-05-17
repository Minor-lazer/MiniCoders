import React from "react";
import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../navbar/NavbarComp.css";
import {FaWhatsapp } from 'react-icons/fa';

const NavbarComp = () => {
  return (
    <>
     <Navbar bg="light" expand="lg" className="me-auto">
     <Navbar.Brand href="#home" className="custom-navbar-brand">
            <Image className="rounded-circle" src={require('./MiniLogo.png')} width="60px" height="60px" />
            <p className="centered-text">MiniCoders</p>
     </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto custom-nav">
      <Nav.Link href="#home" style={{color:"black" , fontSize:"18px"}}>Home</Nav.Link>
            <Nav.Link  href="#features" style={{color:"black", fontSize:"18px"}}>Features</Nav.Link>
            <Nav.Link  href="#features" style={{color:"black", fontSize:"18px"}}>Features</Nav.Link>
            <NavDropdown  title="Course Details"  id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Python</NavDropdown.Item>
            <NavDropdown.Item href="#">Web development</NavDropdown.Item>
            <NavDropdown.Item href="#">Scratch</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="basic-nav-dropdown" style={{color:"white"}}>
            <NavDropdown.Item href="#">MiniCoder</NavDropdown.Item>
            <NavDropdown.Item href="#">Our Initiatives</NavDropdown.Item>
            <NavDropdown.Item href="#">Our Team</NavDropdown.Item>
            <NavDropdown.Item href="#">How We Teach</NavDropdown.Item>
            <NavDropdown.Item href="#">Careers</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>
            <div class="custom-enquiry me-auto"> 
            <FaWhatsapp style={{fontSize:"30px",marginRight:"5px"}}/>
            <p class="enquiry-text">Enquiry</p>
         </div>          
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    </>
  );
}

export default NavbarComp;