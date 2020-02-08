import React, { Component } from "react";
import './quiz.scss'

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('In render method')
    return (      
      <h1>Here is the quiz page.</h1>
    );
  }
}

export default Quiz;
