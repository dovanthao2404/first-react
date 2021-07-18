import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="fixed-top navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a href="/home" className="navbar-brand">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#myNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            id="myNav"
            className="collapse navbar-collapse justify-content-end"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/tin-chi-tiet/">Details</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
