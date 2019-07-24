import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    first: "You",
    last: "...",
    tempF: "",
    tempL: "",
    edit: false
  };

  toSave = () => {
    this.setState({ first: this.state.tempF, last: this.state.tempL });
  };
  toCancel = () => {
    this.setState({ first: "You", last: "..." });
  };

  handleChange = ev => {
    //console.log("hello!!");
    this.setState({ tempF: ev.target.value });
  };
  handleChange2 = ev => {
    //console.log("hello!!");
    this.setState({ tempL: ev.target.value });
  };

  onEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  render() {
    return (
      <div className="whole">
        <h1>HI</h1>
        <div className="info">{this.state.first}</div>
        <div className="info">{this.state.last}</div>
        <button className="editbtn" onClick={this.onEdit}>
          Edit
        </button>

        <div className="inputBox">
          {this.state.edit && (
            <div>
              <div>
                <input type="text" onChange={this.handleChange} />
                <input type="text" onChange={this.handleChange2} />
              </div>
              <div>
                <button onClick={this.toSave}>Save</button>
                <button onClick={this.toCancel}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Form;
