import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import { Footer } from '../Footer'
import About from '../About/About'
import Landing from '../Landing/Landing'
import Story from '../Story/Story'
import Study from '../Study/Study'
import SwingStates from '../SwingStates/SwingStates'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hamburger">Hamburger</div>
        <div className="logo">The 100 Million Project</div>
      </header>
      <div className="app-body">


        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/about">
            <About />
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
        <Footer />
      </div>
    </div>
  );
}

export { App };
