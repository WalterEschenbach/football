import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { auth } from "./firebase/Firebase";
import DismissableAlert from "./DismissableAlert";

export default class Login extends React.Component {
  state = { email: "", password: "", loginError: null };

  handleClose = () => {
    this.props.showLoginModal();
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

    auth
      .signInWithEmailAndPassword(email, password)
      .then((error) => {
        console.log(error);
        if (!error.message) {
          this.props.setNavEmail(email);
          this.errorShow();
          this.handleClose();
        }
      })
      .catch((error) => {
        this.setState({ loginError: error.message });
      });
  };

  errorShow = () => {
    this.setState({ loginError: null });
  };

  render() {
    return (
      <React.Fragment>
        <Modal show={this.props.login} onHide={this.handleClose}>
          {this.state.loginError && (
            <DismissableAlert
              error={this.state.loginError}
              errorShow={this.errorShow}
            />
          )}
          <Form>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group id="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={this.onEmailChange}
                />
              </Form.Group>
              <Form.Group id="formGroupPassword">
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
                Login
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}
