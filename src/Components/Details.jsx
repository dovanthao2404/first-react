import React, { Component } from "react";

import dl from "../data/data.json";
class Details extends Component {
  render() {
    return dl.map((value, key) => {
      if (value.id === +this.props.match.params.id)
        return (
          <div>
            <section
              className="banner position-relative"
              style={{ backgroundImage: "url(" + value.anh + ")" }}
            />
            <section className="content-detail">
              <div className="section">
                <div className="container">
                  <div className="content-detail w-75 mx-auto">
                    <h2 className="title-detail">{value.tieude}</h2>
                    <p>{value.noidung}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    });
  }
}

export default Details;
