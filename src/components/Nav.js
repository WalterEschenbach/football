import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import SignUp from "./SignUpModal";
import Login from "./LoginModal";
import { auth } from "./firebase/Firebase";

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(`${user.email} is logged in:`, user);
  } else {
    console.log("user logged out");
  }
});

export default class NavBar extends React.Component {
  state = { signup: false, login: false, navEmail: null };

  showSignUpModal = () => {
    const { signup } = this.state;
    return signup === false
      ? this.setState({ signup: true })
      : this.setState({ signup: false });
  };
  showLoginModal = () => {
    const { login } = this.state;
    return login === false
      ? this.setState({ login: true })
      : this.setState({ login: false });
  };

  logout = () => {
    auth.signOut();
    this.setState({ navEmail: null });
  };

  setNavEmail = (emailAddress) => {
    this.setState({ navEmail: emailAddress });
  };

  render() {
    const handleSelect = (eventKey) => {
      switch (eventKey) {
        case "4": {
          return this.logout();
        }
        case "5": {
          return this.showLoginModal();
        }
        case "6": {
          return this.showSignUpModal();
        }
        default:
          return console.log("default");
      }
    };

    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">F-Football Analytics</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" onSelect={handleSelect}>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav onSelect={handleSelect}>
              <Nav.Link href="#account">
                {this.state.navEmail != null && `Hello, ${this.state.navEmail}`}
              </Nav.Link>
              <NavDropdown title="Account" id="collasible-nav-dropdown">
                {this.state.navEmail === null ? (
                  <React.Fragment>
                    <NavDropdown.Item eventKey="5" href="#action/3.3">
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="6" href="#action/3.4">
                      Sign Up
                    </NavDropdown.Item>
                  </React.Fragment>
                ) : (
                  <NavDropdown.Item eventKey="4" href="#action/3.2">
                    Logout
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <SignUp
          showSignUpModal={this.showSignUpModal}
          signup={this.state.signup}
          navEmail={this.state.navEmail}
        />
        <Login
          showLoginModal={this.showLoginModal}
          login={this.state.login}
          setNavEmail={this.setNavEmail}
        />
      </React.Fragment>
    );
  }
}
