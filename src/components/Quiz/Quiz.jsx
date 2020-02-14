import React, { Component } from "react";
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
    let newResultScores = this.state.resultScores;
    let resultChanges = questions[this.state.currentQuestion].responses[i].resultChange;

    //Update Scores
    resultChanges.forEach((change) => {
        let changeIndex = change[0];
        let changeAmount = change[1];
        newResultScores[changeIndex] += changeAmount
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
    console.log('Score in getHighestScore: ', highestScore)
    return highestScore;
  }

  render() {
    console.log("New result scores " + this.state.resultScores)
    console.log("indexOfLeadingResult " + this.state.indexOfLeadingResult)
    console.log("currentQuestion " + this.state.currentQuestion)
    console.log("number of questions " + questions.length)

    let leadingResult = results[this.state.indexOfLeadingResult]

    return (
      <div id="quiz-page">
        <div className="wrap">
        <div className="progress-marker-wrapper">
            {questions.map((question, i) => {
              let classes = "progress-marker-bar"
              classes += i === this.state.currentQuestion ? " active" : ""
              classes += i < this.state.currentQuestion ? " passed" : ""
            return <div className={classes}></div>
          })}
          </div>
          
          {this.state.currentQuestion === questions.length - 1 ?
            window.location.href = `./${leadingResult.path}`
            : <div className="quiz-main-wrapper">
                  <p className="question-text">{this.state.currentQuestionText}</p>
                  {this.state.currentQuestionType === "slider" ? (
                    <div className="range-selector">
                      <QuizSlider legend={questions[this.state.currentQuestion].legend} handleSliderSubmission={this.handleSliderSubmission} />
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
            }
          </div>
      </div>
    );
  }
}

export default Quiz;
