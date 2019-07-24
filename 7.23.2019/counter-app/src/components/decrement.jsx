import React, { Component } from "react";
import PropTypes from "prop-types"; //   !!!!!!!

class Decrement extends Component {
  state = {
    counter: this.props.start
  };

  style = {
    fontSize: 13,
    fontWeight: "bold"
    //margin: 2
  };

  buttonOnClick = () => {
    if (this.state.counter === 0) alert("Can not be less than zero");
    else this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <span style={this.style} className="badge badge-primary m-2">
          {this.state.counter}
        </span>
        <button
          onClick={this.buttonOnClick}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }
}

Decrement.propTypes = {
  start: PropTypes.number.isRequired
};

export default Decrement;
