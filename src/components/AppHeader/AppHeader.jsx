import React, { Component } from "react";
import './AppHeader.scss'

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  
    return (
        <>
      <header className="app-header">
        <div className="hamburger">
          <i className="far fa-bars"></i>
        </div>
        <h3 className="title">The 100 MILLION PROJECT</h3>

      </header>
     
      </>
    );
  }
}

export default AppHeader;
