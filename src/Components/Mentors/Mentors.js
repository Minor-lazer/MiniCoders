import { Row, Col, Image, Container } from 'react-bootstrap';
import "./Mentor.css";

const Mentors = () => {
return (
    <>
    <Container className='custom-mentor-container'>
<Row className="text-center">
  <Col>
    <h2>Our Mentors</h2>
  </Col>
</Row>
<Row className="justify-content-center">
  <Col xs={6} md={3} className="text-center">
    <Image className="rounded-circle" src={require('./Mac.png')} alt="Image 1" style={{width:'150px',height:'150px'}} />
    <h4>Masum</h4>
    <p>Software Engineer</p>
  </Col>
  <Col xs={6} md={3} className="text-center">
  <Image className="rounded-circle" src={require('./Jenny.jpg')} alt="Image 1" style={{width:'150px',height:'150px'}} />
    <h4>Jinath</h4>
    <p>Application Developer</p>
  </Col>
  <Col xs={6} md={3} className="text-center">
  <Image className="rounded-circle" src={require('./souvik.png')} alt="Image 1" style={{width:'150px',height:'150px'}} />
    <h4>Souvik</h4>
    <p>Software developer</p>
  </Col>
  <Col xs={6} md={3} className="text-center">
  <Image className="rounded-circle" src={require('./damini.jpg')} alt="Image 1" style={{width:'150px',height:'150px'}} />
    <h4>Damini</h4>
    <p>Software Engineer</p>
  </Col>
</Row>
</Container>
</>
)
}

export default Mentors;
