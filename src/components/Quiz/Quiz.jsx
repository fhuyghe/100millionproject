import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { questions, results } from "../../Data/quizData";
import AppHeader from "../AppHeader/AppHeader";
import "./quiz.scss";
import QuizResult from "./QuizResult";
import QuizSlider from "./QuizSlider";

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
      indexOfLeadingResult: null,
      resultFromSlider: null
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

  handleSliderSubmission = (value) => {
    console.log('in handle slider submission')
    // this.setState({ resultFromSlider: value })
    this.responseSelected(value)
  }

  responseSelected(i) {    
    // Get new result scores    
    let newResultScores = this.state.resultScores;
    let highestScore = this.getHighestScore(newResultScores);
    questions[this.state.currentQuestion].responses[i].resultChange.forEach((result) => {
      let resultIndex = result[0]
      let resultChange = result[1]
      newResultScores[resultIndex] = newResultScores[resultIndex] += resultChange;
    });

    // Get leading result
    let indexOfLeadingResult = newResultScores.indexOf(highestScore);
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
      <div id="quiz-wrap">
        <div className="wrap">
        {this.state.currentQuestion === questions.length - 1 ? (                                          
          <QuizResult />                 
        ) : (
            <div>
              <div className="quiz-main-wrapper">
              <p className="question-text">{this.state.currentQuestionText}</p>
              {this.state.currentQuestionType === "slider" ? (
                <div className="range-selector">
                  <QuizSlider handleSliderSubmission={this.handleSliderSubmission} />
                </div>
              ) : (
                  <div className="multiple-choice-container">
                    {questions[this.state.currentQuestion].responses.map(
                      (response, i) => {
                        return (
                          <div
                            className="option-button"
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
            </div>
            )}
          </div>
      </div>
    );
  }
}

export default Quiz;
