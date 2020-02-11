import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { questions, results } from "../../Data/quizData";
import AppHeader from "../AppHeader/AppHeader";
import QuizResult from "./Quiz";
import "./quiz.scss";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultScores: [],
      currentQuestion: 0,
      sliderQuestionChoices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentQuestionText: questions[0].question,
      currentQuestionType: questions[0].type,
      leadingResult: {},
      indexOfLeadingResult: 0
    };
    this.pathRoot = "/quiz/";
    this.resultId = this.state.indexOfLeadingResult;
  }

  componentDidMount() {
    let initialResultScores = [];
    results.forEach(() => {
      initialResultScores.push(0);
    });
    this.setState({ resultScores: initialResultScores })
  }

  responseSelected(i) {
    console.log(this.state.resultScores)
    // Get new result scores    
    let newResultScores = this.state.resultScores;
    questions[this.state.currentQuestion].responses[i].resultChange.forEach((result) => {
      let resultIndex = result[0]
      let resultChange = result[1]
      newResultScores[resultIndex] = newResultScores[resultIndex] += resultChange;
    });

    // Get leading result
    let indexOfLeadingResult = newResultScores.indexOf(this.getHighestScore(newResultScores));
    let leadingResult = results[indexOfLeadingResult];

    this.setState({
      resultScores: newResultScores,
      currentQuestion: this.state.currentQuestion + 1,
      currentQuestionText: questions[this.state.currentQuestion + 1].question,
      currentQuestionType: questions[this.state.currentQuestion + 1].type,
      leadingResult: leadingResult,
      indexOfLeadingResult: indexOfLeadingResult
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
          <Redirect to={this.pathRoot + this.resultId} />
          //   <div>
          //     <h1 className="question-heading">  
          //     You beliefs can best be described as "{this.state.leadingResult.result}"            
          //     </h1>
          // <div className="result-description">This means that {this.state.leadingResult.description}</div>
          //   </div>
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
