import React from 'react'
import {Row,column,img,Container,Div,Col,Accordion} from "react-bootstrap";
import "../MathPage/MathPage.css";
import { FaAccusoft,FaVideo,FaArrowCircleUp, FaArrowUp} from "react-icons/fa";

function MathPage() {
  return (
    <>
        <section className="python-page-section">
        <Container>
        <Row>
          <h2>Python Course</h2>
         <Col className="mb-4 custom-python-col">
         <FaArrowUp className="custom-fa-ArrowUp"/>
         <h3>LEVELS</h3>
         <p>6 Level Course</p>
         <p>Each level has 8 sessions</p>
         <p>Two sessions per week</p>
         </Col>
         <Col className="mb-4 custom-python-col">
         <FaVideo className="custom-fa-Video"/>
         <h3>SESSIONS</h3>
         <p>Batch Course/Single course</p>
         <p>Upto 5 students per batch</p>
         <p>Age group specific batches</p>
         </Col>
        </Row>
        </Container>
        <Container className="custom-accordion">
        <h2>Syllabus</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Level 1</Accordion.Header>
            <Accordion.Body>
            Learn about the basics of variables, datatypes, operators and conditional statements
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Level 2</Accordion.Header>
            <Accordion.Body>
            In this level, you learn about while loop and lists
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Level 3</Accordion.Header>
            <Accordion.Body>
            In this level, you learn about for loop, nested lists and nested loops
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Level 4</Accordion.Header>
            <Accordion.Body>
            In this level, you will learn about functions with or without arguments and return statements
            </Accordion.Body>
          </Accordion.Item>  <Accordion.Item eventKey="4">
            <Accordion.Header>Level 5</Accordion.Header>
            <Accordion.Body>
            This is a fun level, where you will learn to do animations with python Turtle library
            </Accordion.Body>
          </Accordion.Item>  <Accordion.Item eventKey="5">
            <Accordion.Header>Level 6</Accordion.Header>
            <Accordion.Body>
            In this level, you will learn about import and export of txt and CSV files
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Container>
        <Container>
          <h2>Register</h2>
          <p>Reach out to us on minicoders79@gmail.com or +(91)9954456637</p>
        </Container>
        </section>
    </>
  )
}

export default MathPage