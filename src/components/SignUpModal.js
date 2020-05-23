import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { auth } from "./firebase/Firebase";

export default class SignUp extends React.Component {
  state = { email: "", password: "" };

  handleClose = () => {
    this.props.showSignUpModal();
    this.setState({ email: "", password: "" });
  };
  onEmailChange = async (e) => {
    let value = e.target.value;
    await this.setState({ email: value });
  };
  onPasswordChange = async (e) => {
    let value = e.target.value;
    await this.setState({ password: value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    auth.createUserWithEmailAndPassword(email, password);
    this.handleClose();
  };

  render() {
    return (
      <Modal show={this.props.signup} onHide={this.handleClose}>
        <Form id="signupForm">
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please sign up for an account...
            <br></br>
            <Form.Group id="signupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={this.onEmailChange}
              />
            </Form.Group>
            <Form.Group id="signupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.onPasswordChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={this.onSubmit}>
              Create Account
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}
