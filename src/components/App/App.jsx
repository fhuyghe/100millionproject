import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css"
import Splash from "../Splash/Splash";
import About from "../About/About";
import Landing from "../Landing";
import Story from "../Story/Story";
import Study from "../Study/Study";
import SwingStates from "../SwingStates/SwingStates";
import SwingBarChart from "../SwingStates/SwingStatesBar"
import SwingStatesBubble from "../SwingStates/SwingStatesBubble"

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
          <Route path="/swingstates">
            <SwingStates />
          </Route>
          <Route exact path="/swingstatesbar">
            <SwingBarChart />
          </Route>
          <Route exact path="/swingstatesbubble">
            <SwingStatesBubble />
          </Route>

        </Switch>
      </div>
   
    </div>
  );
}

export { App };
