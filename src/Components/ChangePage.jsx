import React, { Component } from "react";
import Home from "./Home";
import Details from "./Details";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import dl from "../data/data.json";

class ChangePage extends Component {
  render() {
    return (
      <div>
        <Route path="/home" component={Home} />
        <Route path="/tin-chi-tiet/:slug.:id" component={Details} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default ChangePage;
