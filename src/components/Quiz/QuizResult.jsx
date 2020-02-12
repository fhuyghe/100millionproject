import Quiz from "./Quiz";
import React, { Component } from "react";
import { results } from "../../Data/quizData";
import AppHeader from "../AppHeader/AppHeader";
import {withRouter} from 'react-router';
import "./quizResults.scss";

class QuizResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {        
    return (
        <div>
        <AppHeader /> 
        <div className="main-wrapper">
            <div className="lead-in">You are:</div>
                <div className="result-heading">{results[0].result}</div>
                <div className="result-description">{results[0].description}</div>
            </div>           
        </div>
    );
  }
}

export default withRouter(QuizResult);
