// Landing.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
  return (
    <section
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6}>
            <h1 className="fw-bold display-4 mb-3">
              Discover Your Journey with <span style={{ color: "#ffd700" }}>Yatra</span>
            </h1>
            <p className="lead mb-4">
              Explore destinations, book trips, and create unforgettable memories. 
              Your adventure starts here.
            </p>
            <Button
              variant="warning"
              size="lg"
              className="me-3 shadow"
              style={{ fontWeight: "600" }}
            >
              Get Started
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              style={{ fontWeight: "600" }}
            >
              Learn More
            </Button>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center">
            <img
              src="https://p1.hiclipart.com/preview/905/869/93/city-home-tourism-in-nepal-employment-kathmandu-place-of-worship-architecture-temple-png-clipart.jpg"
              alt="Travel Adventure"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Landing;
