import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
const Footer = () => {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container className="col-auto" style={{color:"white"}}>
        <Row >
          <Col xs={12}>
            <small style={{fontSize:12, color:"grey"}}>Developed by ceycode.com | Copyright &copy; {new Date().getFullYear()}</small>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;