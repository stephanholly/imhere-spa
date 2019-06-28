import React, { Component } from 'react';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="home-container">
        <div className="black">
          <p className="imhere">imhere</p>
          <div className="social">
            <i className="fab fa-facebook-square font"></i>
            <a href="https://www.instagram.com/im_here_app/"><i className="fab fa-instagram font"></i></a>
            <a href="https://www.snapchat.com/add/imhereapp"><i className="fab fa-snapchat-square font"></i></a>
            <a href="https://twitter.com/imhere19092951"><i className="fab fa-twitter-square font"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
