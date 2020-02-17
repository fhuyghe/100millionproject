import React, { Component } from "react";
import './AppHeader.scss'
import { Link } from 'react-router-dom'
import SocialLinks from '../Shared/SocialLinks'
import Button from '../Shared/Button'
import 'hamburgers/dist/hamburgers.css'

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() { 
    this.setState({
      active: !this.state.active
    })
  }

  render() {

    let pages = [
      { path: "", title:"The Story" },
      { path: "typesofnonvoters", title: "Quiz", subtitle:"What kind of non-voter are you?" },
      { path: "swingstates", title:"Swing States" },
      { path: "videos", title:"Videos" }]
  
    return (
        <>
        <header className={this.state.active ? "app-header active" : "app-header"}>
          <div className="banner">
            <button className={this.state.active ? "hamburger hamburger--elastic is-active" : "hamburger hamburger--elastic" } type="button" onClick={this.toggleMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
            <Link className="title" to='/' onClick={() => {return this.state.active && this.toggleMenu}}><img src="/100M_logo__long_white-600.png" alt="The 100 Million Project" /></Link>
          </div>
          
        {this.state.active &&
            <div className="menu-wrap">
            <div className="menu">
            <div className="wrap">
            <div className="row">
              <div className="col-md-6">
                  {pages.map((link) => <div className="page-link">
                    <Link to={"/" + link.path} className={this.props.location === link.path ? "active" : ""} onClick={this.toggleMenu}>{link.title}</Link>
                    {link.subtitle && <p>{link.subtitle}</p>}
                  </div>)}
                </div>
                <div className="col-md-6">
                  <Link to='/about' className={this.props.location === 'about' ? "active" : ""} onClick={this.toggleMenu}>About</Link>
                  <p>The 100 Million Project is a comprehensive national study of the non-voting adult population in the United States and aims to understand citizen disengagement from the political process.</p>
                  <Button to='/study' color="transparent" onClick={this.toggleMenu}>Download the report</Button>
                  <SocialLinks />
                </div>
              </div>
              </div>
              </div>
            <div className="menu-bg" onClick={this.toggleMenu}></div>
          </div>
        }
        </header>
      </>
    );
  }
}

export default AppHeader;
