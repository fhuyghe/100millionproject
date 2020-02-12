import React, { Component } from "react";
import './AppHeader.scss'
import { Link } from 'react-router-dom'

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
      { path: "quiz", title:"What kind of non-voter are you?" },
      { path: "swingstates", title:"Swing States" },
      { path: "videos", title:"Videos" },
      { path: "about", title:"About" }]
  
    return (
        <>
      <header className={this.state.active ? "app-header active" : "app-header"}>
          <div className="hamburger" onClick={this.toggleMenu}>
            <i className="far fa-bars"></i>
          </div>
        <h3 className="title"><Link to='/' onClick={this.state.active && this.toggleMenu}>The 100 MILLION PROJECT</Link></h3>
        
        {this.state.active &&
          <div className="menu">
            {pages.map((link) => <Link to={"/" + link.path} className={this.props.location === link.path && "active"} onClick={this.toggleMenu}>{link.title}</Link>)}
            <Link to='/study' className={this.props.location === 'quiz' && "active"} className="button" onClick={this.toggleMenu}>Download the study</Link>
          </div>
        }
        </header>
      </>
    );
  }
}

export default AppHeader;
