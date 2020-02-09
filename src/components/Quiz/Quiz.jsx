import React, { Component } from "react";
import { questions, results } from "../../Data/quizData";
import "./quiz.scss";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [0, 0, 0],
      currentQuestion: 0,
      sliderQuestionChoices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentQuestionText: questions[0].question,
      currentQuestionType: questions[0].type
    };
  }

  choiceSelected(value) {
    console.log(value);
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      currentQuestionText: questions[this.state.currentQuestion + 1].question,
      currentQuestionType: questions[this.state.currentQuestion + 1].type
    });
  }

  render() {
    return (
      <div>
        {this.state.currentQuestion === questions.length - 1 ? (
          <h1 className="question-heading">Here are the results</h1>
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
                      onClick={() => this.choiceSelected(choice)}
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
                        onClick={() =>
                          this.choiceSelected(response.responseValue)
                        }
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
