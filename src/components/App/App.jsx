import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'
import { Footer } from '../Footer'
import { Header } from '../Header'
import About from '../About/About'
import Landing from '../Landing'
import Story from '../Story/Story'
import Study from '../Study/Study'
import SwingStates from '../SwingStates/SwingStates'

function App() {
  return (
    <div className="App">
      <Header />
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
      </div>
      <Footer />
    </div>
  );
}

export { App };
