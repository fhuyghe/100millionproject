import React from 'react';
import Menu from '../Menu'
import './header.scss'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-pro/css/all.css'

function Header() {
  return (
    <header className="App-header">
          <div className="hamburger"><i className="far fa-bars"></i></div>
          <div className="logo"><Link to='/'><img src="100_Million_Title-500.png" /></Link></div>
          <Menu />
    </header>
  );
}

export {Header};