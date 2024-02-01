import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="text-light py-5 nav-footer"
      style={{ backgroundColor: "#ab131b", borderTop: "1px solid white" }}
    >
      <Container>
        <Row>
          <Col md={3} style={{ fontSize: "16px" }}>
            <h5>Contact Us</h5>
          </Col>
          <Col md={3} style={{ fontSize: "16px" }}>
            <h5>About Papa John's</h5>
          </Col>
          <Col md={3} style={{ fontSize: "16px" }}>
            <h5>Terms & Conditions</h5>
          </Col>
          <Col md={3} style={{ fontSize: "16px" }}>
            <h5>Privacy Policy</h5>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="mt-3" style={{ fontSize: "15px" }}>
              © 2024 Papa John's Philippines - Powered by LivePepper
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
