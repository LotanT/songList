import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userService } from '../services/user.service';

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [isLogIn, setIsLogIn] = useState(true);

  const validateForm = () => {
    return userName.length > 0 && password.length > 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if(isLogIn) logIn()
    else signup()
  };

  const logIn = () => {
    userService.login({ username: userName , password });
  };

  const signup = () => {
    userService.signup({ email, password, username: userName });
  };

  const toggleIsLogIn = () => {
    setIsLogIn(!isLogIn);
  };

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="userName">
            <Form.Label>User name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
        {!isLogIn && <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>}
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="footer">
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            {isLogIn && <span>Login</span>}
            {!isLogIn && <span>Sign up</span>}
          </Button>
          {isLogIn && (
            <span onClick={toggleIsLogIn} className="signup">
              Not have account yet? Sign up
            </span>
          )}
          {!isLogIn && (
            <span onClick={toggleIsLogIn} className="signup">
              Already registerd? Log in
            </span>
          )}
        </div>
      </Form>
    </div>
  );
}
