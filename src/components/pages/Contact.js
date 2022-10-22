import React from "react";
import Form from "react-bootstrap/Form";

export default function Contact() {
  return (
    <div class="mx-5 d-flex flex-column">
      <h1 class="d-flex flex-column align-items-center">Contact Me</h1>
      {/* <p>
        <div>
          <a
            href="tel:347-654-5187"
            class="text-dark"
            target="_blank"
            rel="noreferrer"
          >
            P: 347-654-5187
          </a>
        </div>
        <div>
          <a
            href="mailto: jdanleano@gmail.com"
            class="text-dark"
            target="_blank"
            rel="noreferrer"
          >
            jdanleano@gmail.com
          </a>
        </div>
        <div>
          <a
            href="https://www.jdanmedia.com"
            class="text-dark"
            target="_blank"
            rel="noreferrer"
          >
            JDan Media
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/jdanmedia/"
            class="text-dark"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/jdanmedia/"
            class="text-dark"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div>
          <a
            href="https://soundcloud.com/jdanmedia"
            class="text-dark"
            target="_blank"
            rel="noreferrer"
          >
            Soundcloud
          </a>
        </div>
      </p> */}
      <Form className="mx-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="email" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            placeholder="Type your message here"
            as="textarea"
            rows={5}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
