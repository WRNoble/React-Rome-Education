import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Cicero's Academy",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Sign up", path: "/join" },
        { title: "Log In", path: "/signin" },
      ],
      home: {
        title: "Ancient Rome, at your finger tips.",
        text:
          "online classes designed to teach you about the history of the Romans.",
        subtext:
          "Take dozens from classes anywhere form the the Punic Wars to the Fall of the Western Empire.",
        subtexttwo:
          "Classes offered on import individuals from Cincinnatus to the last emperor",
      },
      join: {
        title:
          "Hello and welcome, your journey through Ancient Rome is about to begin!",
        text: "Subscription is free, and always will be!",
      },
      login: {
        title: "Welcome back, we're glad your here.",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar
            className="border-bottom navbar navbar-dark bg-dark"
            expand="lg"
          >
            <Navbar.Brand>
              <a href={"/"} className="text-white text-decoration-none">
                Cicero's Academy
              </a>
              <Navbar.Toggle
                className="border-0"
                aria-controls="navbar-toggle"
              />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/join">
                    Sign Up!
                  </Link>
                  <Link className="nav-link" to="/signin">
                    Log In
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar.Brand>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
