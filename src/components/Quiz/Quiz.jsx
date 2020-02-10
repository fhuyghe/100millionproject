import React, { Component } from "react";
import { questions, results } from "../../Data/quizData";
import "./quiz.scss";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultScores: [0, 0, 0],
      currentQuestion: 0,
      sliderQuestionChoices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentQuestionText: questions[0].question,
      currentQuestionType: questions[0].type,
      leadingResult: {}
    };
  }

  responseSelected(i) {
    // Get new result scores
    let currentResults = this.state.resultScores;
    let resultChanges =
      questions[this.state.currentQuestion].responses[i].resultChange;
    let newResultScores = currentResults.map((result, i) => {
      return result + resultChanges[i];
    });    
    let indexOfLeadingResult = newResultScores.indexOf(this.getHighestScore(newResultScores));    
    let leadingResult = results[indexOfLeadingResult];    
    this.setState({
      resultScores: newResultScores,
      currentQuestion: this.state.currentQuestion + 1,
      currentQuestionText: questions[this.state.currentQuestion + 1].question,
      currentQuestionType: questions[this.state.currentQuestion + 1].type,
      leadingResult: leadingResult
    });
  }

  getHighestScore(scores) {
    let highestScore = 0;
    scores.forEach(score => {
      if (score > highestScore) {
        highestScore = score;
      }      
    })
    return highestScore;
  }

  render() {    
    return (
      <div>
        {this.state.currentQuestion === questions.length - 1 ? (
          <div>
            <h1 className="question-heading">  
            You beliefs can best be described as "{this.state.leadingResult.result}"            
            </h1>
        <div className="result-description">This means that {this.state.leadingResult.description}</div>
          </div>
        ) : (
          <div>
            <h1 className="question-heading">Here is the quiz page.</h1>
            <p className="question-text">{this.state.currentQuestionText}</p>
            {this.state.currentQuestionType === "slider" ? (
              <div className="range-selector">
                {this.state.sliderQuestionChoices.map((choice, i) => {
                  return (
                    <div
                      key={i}
                      className="range-option"
                      value={choice}
                      onClick={() => this.responseSelected(i)}
                    >
                      {choice}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="multiple-choice-container">
                {questions[this.state.currentQuestion].responses.map(
                  (response, i) => {
                    return (
                      <div
                        className="multiple-choice-options"
                        key={i}
                        onClick={() => this.responseSelected(i)}
                      >
                        {response.responseValue}
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
