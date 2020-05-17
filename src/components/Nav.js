import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import SignUp from "./SignUpModal";

export default class NavBar extends React.Component {
  state = { show: false };

  showSignUpModal = () => {
    const { show } = this.state;
    return show === false
      ? this.setState({ show: true })
      : this.setState({ show: false });
  };

  render() {
    const handleSelect = (eventKey) => {
      switch (eventKey) {
        case "6": {
          this.showSignUpModal();
        }
      }
    };

    return (
      <React.Fragment>
        <Nav
          className="right"
          variant="pills"
          activeKey="1"
          onSelect={handleSelect}
        >
          <Nav.Item>
            <Nav.Link eventKey="1" href="#/home">
              Account
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" title="Item">
              Create Guide
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="5" title="Item">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="6" title="Item">
              Sign Up
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <SignUp showSignUpModal={this.showSignUpModal} show={this.state.show} />
      </React.Fragment>
    );
  }
}
