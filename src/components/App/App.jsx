import React from "react";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap-grid.css"
import Splash from "../Splash/Splash";
import About from "../About";
import Videos from "../Videos";
import Landing from "../Landing";
import SwingStates from "../SwingStates/SwingStates";
import SwingStatesChart from "../SwingStates/SwingStatesChart"
import Quiz from "../Quiz/Quiz"
import QuizResult from "../Quiz/QuizResult";
import NoMatch from "../NoMatch"
import AppHeader from "../AppHeader"

const App = () => {

  let location = useLocation()
  let pathClass = useLocation().pathname.split('/')[1] //Get the page name from the path

    return (
      <div className={"App " + pathClass}>
        <AppHeader location={location} />
        <div className="app-body">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>

            <Route exact path="/splash">
              <Splash />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>
            
            <Route exact path="/videos">
              <Videos />
            </Route>

            <Route exact path="/swingstates">
              <SwingStates />
            </Route>
            <Route path="/swingstates/:statename" render={props => <SwingStatesChart {...props} />} />
            
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/quiz/results" render={props => <QuizResult {...props} />}  />

            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    )
}

export { App };
