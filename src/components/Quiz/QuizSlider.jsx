import React, { Component } from "react";
import "./quizSlider.scss";

class QuizSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 5 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="slider-component-container">
        <form>
          <div className="slider-wrapper">
            <div className="legend" >{this.props.legend[0]}</div>
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
          <div className="legend" >{this.props.legend[1]}</div>  
          </div>          
        </form>
        <input htmlFor="sliderInput" className="next-button" onClick={() => this.props.handleSliderSubmission(this.state.value)} type="submit" value="Next" />        
      </div>
    );
  }
}

export default QuizSlider;
