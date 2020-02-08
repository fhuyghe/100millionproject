import React, { Component } from "react";
import { questions, results } from "../../Data/quizData";
import "./quiz.scss";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [0, 0, 0],
      currentQuestion: 0,
      currentQuestionText: questions[0].question,
      currentQuestionType: questions[0].type
    };
  }

  scaleOptionSelected(value){
    console.log(value)
  }

  render() {    
    return (
      <div>        
        <h1 className="question-text">Here is the quiz page.</h1>
        <p className="question-text">{this.state.currentQuestionText}</p>        
        {(this.state.currentQuestionType === "slider") 
          ? 
          <div className="range-selector">
            <div value={1} onClick={(e) => this.scaleOptionSelected(1)} className="range-choice">1</div>
            <div className="range-choice">2</div>
            <div className="range-choice">3</div>
            <div className="range-choice">4</div>
            <div className="range-choice">5</div>
          </div>
          :
          <div>Here's the multiple choice</div>
        }
      </div>
    );
  }
}

export default Quiz;
