import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function setFormDataLogic(key, value) {
  formData[key] = value;
}

function ContactMe() {
  const [BSformData, setBSFormData] = useState({
    email: "",
    message: "",
  });

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
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address : </Form.Label>
          <Form.Control
            type="email"
            placeholder="mvohra12@mycentennial.ca"
            name="email"
            value={BSformData.email}
            onChange={changeEmail}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
          name="message"
          value={BSformData.message}
          onChange={changeMessage}
        >
          <Form.Label>Example textarea : </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default ContactMe;
