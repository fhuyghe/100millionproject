import React from 'react'
import './App.css'
import {Footer} from '../Footer'
import About from '../About'
import Landing from '../Landing'
import Story from '../Story'
import Study from '../Study'
import SwingStates from '../SwingStates'

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
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/study">
            <Study />
          </Route>
          <Route path="/swingstates">
            <SwingStates />
          </Route>

        </Switch>
    </div>
  );
}

export {App};
