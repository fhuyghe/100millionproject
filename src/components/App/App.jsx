import React from 'react'
import './App.css'
import {Footer} from '../Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hamburger">Hamburger</div>
        <div className="logo">The 100 Million Project</div>
      </header>
      <div className="app-body">
        The body
      </div>
      <Footer />
    </div>
  );
}

export {App};
