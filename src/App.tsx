import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <StyledHeader>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello world</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
