import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ContactCard from "./components/contactCard";
import Decrement from "./components/decrement";

function App() {
  return (
    <div className="App">
      <ContactCard
        className="card"
        name="Ken"
        mobile="9292299069"
        email="ken@gmail.com"
      />
      <ContactCard
        className="card"
        name="Napat"
        mobile="1111111111"
        email="napat@gmail.com"
      />
      <ContactCard
        className="card"
        name="Summer"
        mobile="2222222222"
        email="summer@gmail.com"
      />
      <Decrement start="8" />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
