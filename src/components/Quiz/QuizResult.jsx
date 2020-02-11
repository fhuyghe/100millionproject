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
    this.resultId = this.props.match.params.resultId;
  }

  

  render() {    
      console.log(this.resultId)  
    return (
        <h1>Here are the quiz results</h1>
    );
  }
}

export default withRouter(QuizResult);
