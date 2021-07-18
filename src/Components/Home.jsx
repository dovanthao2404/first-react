import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import dl from "../data/data.json";
import NewsItem from "./NewsItem";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <section
          className="banner position-relative"
          style={{ backgroundImage: "url(./src/img/home-bg.jpg)" }}
        >
          <div className="overlay-banner">
            <div className="site-heading text-center">
              <h1>Clean Blog</h1>
              <span clas="sub-heading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </section>
        <section className="content mt-5">
          <div className="container">
            <div className="row">
              {dl.map((value, key) => (
                <NewsItem
                  key={key}
                  tieude={value.tieude}
                  id={value.id}
                  mota={value.mota}
                  noidung={value.noidung}
                ></NewsItem>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
