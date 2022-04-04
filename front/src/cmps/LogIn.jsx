import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogIn, setIsLogIn] = useState(true);


  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();

  }

  const toggleIsLogIn = () =>{
    setIsLogIn(!isLogIn)
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
      {!isLogIn && <Form.Group size="lg" controlId="userName">
          <Form.Label>User name</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>}
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
         {isLogIn && <span>Login</span>}
         {!isLogIn && <span>Sign up</span>}
        </Button>
      {isLogIn && <span onClick={toggleIsLogIn} className='signup'>Not have account yet? Sign up</span>}
      {!isLogIn && <span onClick={toggleIsLogIn} className='signup'>Already registerd? Log in</span>}
        </div>
      </Form>
    </div>
  );
}