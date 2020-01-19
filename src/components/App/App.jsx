import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import { Footer } from "../Footer";
import { Header } from "../Header";
import Splash from "../Splash/Splash";
import About from "../About/About";
import Landing from "../Landing";
import Story from "../Story/Story";
import Study from "../Study/Study";
import SwingStates from "../SwingStates/SwingStates";

function App() {
  return (
    <div className="App">
       <Route path="/" render={props => <Header {...props} />} />

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
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export { App };
