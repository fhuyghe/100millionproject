import React from 'react';
import Menu from '../Menu'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-pro/css/all.css'

function Header() {
  return (
    <header className="App-header">
          <div className="hamburger"><i class="far fa-bars"></i></div>
          <div className="logo"><Link to='/'>The 100 Million Project</Link></div>
          <Menu />
    </header>
  );
}

export {Header};