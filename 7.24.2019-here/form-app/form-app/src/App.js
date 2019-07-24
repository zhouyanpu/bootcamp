import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";
import Folder from "./component/folder";
//import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form className="form" />
        <Folder />
      </div>
    );
  }
}

export default App;
