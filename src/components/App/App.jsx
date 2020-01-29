import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Splash from "../Splash/Splash";
import About from "../About/About";
import Landing from "../Landing";
import Story from "../Story/Story";
import Study from "../Study/Study";
import SwingStates from "../SwingStates/SwingStates";
import SwingBarChart from "../SwingStates/SwingStatesBar"
import SwingStatesBubble from "../SwingStates/SwingStatesBubble"
import SwingStatesCircle from "../SwingStates/SwingStatesCircle"


function App() {
  return (
    <div className="App">
     
      <div className="app-body">
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route path="/landing">
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
          <Route exact path="/swingstates">
            <SwingStates />
          </Route>
          <Route path="/swingstates/bar">
            <SwingBarChart />
          </Route>
          <Route path="/swingstates/bubble">
            <SwingStatesBubble />
          </Route>
          <Route path="/swingstates/circle">
            <SwingStatesCircle />
          </Route>

        </Switch>
      </div>
   
    </div>
  );
}

export { App };
