import React, { Component } from "react";
import { questions, results } from "../../Data/quizData";
import './quiz.scss'

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(questions)
  }

  render() {
    console.log('In render method')
    return (      
      <h1>Here is the quiz page.</h1>
    );
  }
}

export default Quiz;
