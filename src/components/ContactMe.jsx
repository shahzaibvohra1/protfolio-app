import React, { useState } from "react";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Logo from "../assets/Logo.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function ContactMe() {
  const [BSformData, setBSFormData] = useState({
    email: "mvohra12@mycentennial.ca",
    message: "",
  });
  const navigate = useNavigate();

  const changeMessage = (event) => {
    const update = event.target;
    setBSFormData({ message: update.value, email: BSformData.email });
  };

  const changeEmail = (event) => {
    const update = event.target;
    setBSFormData({ message: BSformData.message, email: update.value });
  };

  const handleSubmit = (event) => {
    console.log(BSformData);
    navigate("/");
  };
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Logo} />
              <Card.Body>
                <Card.Title>Contact Details</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Email: mvohra12@centennial.ca</ListGroup.Item>
                <ListGroup.Item>Mobile: 437-978-0280</ListGroup.Item>
                <ListGroup.Item>Fax: 000-000</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel label="email" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="mvohra12@mycentennial.ca"
                  name="email"
                  value={BSformData.email}
                  onChange={changeEmail}
                />
              </FloatingLabel>

              <FloatingLabel label="Leave a Comment" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  name="message"
                  value={BSformData.message}
                  onChange={changeMessage}
                />
              </FloatingLabel>

              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactMe;
