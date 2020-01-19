import React, { Component } from "react";
import Menu from "../Menu";
import "./header.scss";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import "@fortawesome/fontawesome-pro/css/all.css";
import { render } from "@testing-library/react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.location.pathname);
    return (
      <header className="App-header">
        {this.props.location.pathname === "/landing" && (
          <div className="hamburger">
            <i className="far fa-bars"></i>
          </div>
        )}
     
        <Menu />
      </header>
    );
  }
}

export { Header };
