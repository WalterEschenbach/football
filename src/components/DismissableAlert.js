import React from "react";
import { Alert } from "react-bootstrap";

export default class DismissibleAlert extends React.Component {
  render() {
    if (this.props.error) {
      return (
        <Alert
          variant="danger"
          onClose={() => this.props.errorShow()}
          dismissible
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{this.props.error}</p>
        </Alert>
      );
    }
  }
}
