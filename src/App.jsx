import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Details from "./Components/Details";
import Contact from "./Components/Contact";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ChangePage from "./Components/ChangePage";

function App() {
  return (
    <Router>
      <Nav />
      <ChangePage></ChangePage>
      <Footer />
    </Router>
  );
}
export default App;
