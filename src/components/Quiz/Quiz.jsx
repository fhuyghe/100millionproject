import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { questions, results } from "../../Data/quizData";
import "./quiz.scss";
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
      indexOfLeadingResult: null,
      resultFromSlider: null
    };
    this.pathRoot = "/typesofnonvoters/";
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
    this.responseSelected(value)
  }

  responseSelected(i) {    
    // Get new result scores    
    let currentScores = this.state.resultScores;
    let resultChanges = questions[this.state.currentQuestion].responses[i].resultChange;
    let newResultScores = []; 
    currentScores.forEach((score, i) => {      
      resultChanges.forEach((result) => {
        let resultIndex = result[0];
        let resultChange = result[1];
        if (i === resultIndex){
          newResultScores.push(currentScores[i] += resultChange);
        } else {
          newResultScores[i] = currentScores[i];
        }      
      });
    })

    

    let highestScore = this.getHighestScore(newResultScores);


    // Get leading result
    let indexOfLeadingResult = newResultScores.indexOf(highestScore);    
    // console.log("Highest score " + highestScore)
    // console.log("New result scores " + newResultScores)
    // console.log("indexOfLeadingResult " + indexOfLeadingResult)
    this.setState({
      resultScores: newResultScores,
      currentQuestion: this.state.currentQuestion + 1,
      currentQuestionText: questions[this.state.currentQuestion + 1].question,
      currentQuestionType: questions[this.state.currentQuestion + 1].type,      
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
    console.log("New result scores " + this.state.resultScores)
    console.log("indexOfLeadingResult " + this.state.indexOfLeadingResult)
    console.log("currentQuestion " + this.state.currentQuestion)
    console.log("number of questions " + questions.length)
    return (
      <div id="quiz-wrap">
        <div className="wrap">
        {this.state.currentQuestion === questions.length - 1 ? 
        window.location.href = `./${this.state.indexOfLeadingResult}`
        : (
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
