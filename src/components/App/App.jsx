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
import SwingStatesPage from "../SwingStates/SwingStatesPage"
import Quiz from "../Quiz/Quiz"
import QuizResult from "../Quiz/QuizResult";
import TypesOfNonVoters from "../TypesOfNonVoters"
import NoMatch from "../NoMatch"
import AppHeader from "../AppHeader"

const App = () => {

  let location = useLocation()
  let pathClass = useLocation().pathname.split('/')[1] //Get the page name from the path

    return (
      <div className={"App " + pathClass}>
        <AppHeader location={pathClass} />
        <div className="app-body">
          <Switch>
            <Route exact path="/" render={props => <Landing {...props} />} />

            <Route exact path="/splash">
              <Splash />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>
            
            <Route exact path="/videos">
              <Videos />
            </Route>

            {/* Swing States */}
            <Route exact path="/swingstates" render={props => <SwingStates {...props} />} />
            <Route path="/swingstates/:statename" render={props => <SwingStatesPage {...props} />} />
            
            {/* Types of Non-Voters */}
            <Route exact path="/typesofnonvoters" render={props => <TypesOfNonVoters {...props} />}  />
            <Route exact path="/typesofnonvoters/quiz" render={props => <Quiz {...props} />}  />
            <Route path="/typesofnonvoters/:type" render={props => <QuizResult {...props} />}  />

            {/* Error 404 */}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    )
}

export { App };
