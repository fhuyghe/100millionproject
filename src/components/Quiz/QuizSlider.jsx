import React, { Component } from "react";
import "./quizSlider.scss"


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
        <label>
          <input
            id="typeinp"
            type="range"
            min="0" max="10"
            value={this.state.value}
            onChange={this.handleChange}
            step="1"
            orient="vertical"/>        
        </label>
      </div>
    );
  }
}

export default QuizSlider;