import React, { Component } from "react";
import { results } from "../../Data/quizData";
//import {Link, withRouter} from 'react-router';
import { Link } from 'react-router-dom'
import "./quizResults.scss";

class QuizResult extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    const result = results.find((option) => { return option.path === this.props.match.params.type })

    return (
        <div id="resultPage" className={result.color}>    
        <div className="main-wrapper">
          <div className="wrap">
            <div className="result-content">
            <h3 className="lead-in">You are:</h3>
                <h1 className="result-heading">{result.name}</h1>
                <div className="result-description" dangerouslySetInnerHTML={{__html: result.description}}></div>
            </div>           
          <div className="result-footer">
            <Link className="button" to="/typesofnonvoters/quiz">Take the quiz again</Link>
            <Link className="button" to="/typesofnonvoters/#allTypes">Discover the other groups</Link>
          </div>
          </div>
          </div>
        </div>
    );
  }
}

export default QuizResult;
