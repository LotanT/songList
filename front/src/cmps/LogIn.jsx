import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogIn, setIsLogIn] = useState(true);


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();

  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className='footer'>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      <span className='signup'>Not have account yet? Sign up</span>
        </div>
      </Form>
    </div>
  );
}