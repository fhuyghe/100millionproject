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
  
    return (
        <>
      <header className={this.state.active ? "app-header active" : "app-header"}>
          <div className="hamburger" onClick={this.toggleMenu}>
            <i className="far fa-bars"></i>
          </div>
        <h3 className="title"><Link to='/' onClick={this.state.active && this.toggleMenu}>The 100 MILLION PROJECT</Link></h3>
        
        {this.state.active &&
          <div className="menu">
            <Link to='/quiz' onClick={this.toggleMenu}>What kind of non-voter are you?</Link>
            <Link to='/swingstates' onClick={this.toggleMenu}>Swing States</Link>
            <Link to='/videos' onClick={this.toggleMenu}>Videos</Link>
            <Link to='/study' onClick={this.toggleMenu}>Study</Link>
            <Link to='/about' onClick={this.toggleMenu}>About</Link>
        </div>
        }
        </header>
      </>
    );
  }
}

export default AppHeader;
