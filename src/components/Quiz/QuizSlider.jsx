import React, { Component } from "react";
import "./quizSlider.scss"
import "./quiz.scss"


class QuizSlider extends React.Component {
  constructor() {
    super()
    this.state = {value: 3}
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
          <div>Extremely Interested</div>
        <label>
          <input
            id="sliderInput"
            type="range"
            min="0" max="10"
            value={this.state.value}
            onChange={this.handleChange}
            step="1"
            orient="vertical"/>        
        </label>
        <div>Not Interested</div>
        <button className="next-button" type="submit" for="sliderInput" >NEXT</button>
      </div>
    );
  }
}

export default QuizSlider;