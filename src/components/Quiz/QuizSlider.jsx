import React, { Component } from "react";
import "./quizSlider.scss";

class QuizSlider extends React.Component {
  constructor() {
    super();
    this.state = { value: 3 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(){
    console.log(this.props)
  }

  render() {
    return (
      <div className="slider-component-container">
        <div>Extremely Interested</div>
        <form>
          <div className="slider-wrapper">
          
          <input
            id="sliderInput"
            className="slider"
            type="range"
            min="0"
            max="10"
            value={this.state.value}
            onChange={this.handleChange}
            step="1"
          />          
          </div>          
        </form>
        <div>Not Interested</div>
        <input for="sliderInput" className="next-button" onClick={() => this.props.handleSliderSubmission(this.state.value)} type="submit" value="Next" />        
      </div>
    );
  }
}

export default QuizSlider;
