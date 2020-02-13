import Quiz from "./Quiz";
import React, { Component } from "react";
import { results } from "../../Data/quizData";
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
        <div className="main-wrapper">
            <div className="lead-in">You are:</div>
                <div className="result-heading">test</div>
                <div className="result-description">test</div>
            </div>           
        </div>
    );
  }
}

export default withRouter(QuizResult);
