import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (

      <footer className="text-center py-5">
        <div className="social">
          <i className="fab fa-twitter" />
          <i className="fab fa-facebook" />
          <i className="fab fa-github" />
        </div>
        <div className="copyright">
          <p className="my-2">Copyright © Your Website 2021</p>
        </div>
      </footer>

    );
  }
}

export default Footer;