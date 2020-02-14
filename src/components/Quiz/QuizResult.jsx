import Quiz from "./Quiz";
import React, { Component } from "react";
import { results } from "../../Data/quizData";
import {withRouter} from 'react-router';
import "./quizResults.scss";

class QuizResult extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      backgroundColors: ['#F8D807', '#009DE0', '#F2705E', '#3ABA89', '#BFBFBF', '#111111']  
    };
  }
  
  render() {           
    return (
        <div>        
        <div className="main-wrapper"
              style={{backgroundColor: this.state.backgroundColors[this.props.match.params.type]}}>
            <div className="lead-in">You are:</div>
                <div className="result-heading">{results[this.props.match.params.type].result}</div>
                <div className="result-description">{results[this.props.match.params.type].description}</div>
            </div>           
        </div>
    );
  }
}

export default withRouter(QuizResult);
