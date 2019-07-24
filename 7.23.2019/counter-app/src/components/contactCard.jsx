import React, { Component } from "react";

class ContactCard extends Component {
  state = {};
  render() {
    return (
      <span>
        <h1>Contact Me</h1>
        <span>{this.props.name}</span>
        <span> {this.props.mobile}</span>
        <span>{this.props.email}</span>
      </span>
    );
  }
}

export default ContactCard;
