import React, { Component } from "react";
import { results } from "../../Data/quizData";
import { Link } from 'react-router-dom'
import "./quizResults.scss";

class QuizResult extends Component {

  render() {

    const result = results.find((option) => { return option.path === this.props.match.params.type })

    return (
        <div id="resultPage" className={result.color}>    
        <div className="main-wrapper">
          <div className="wrap">
            <div className="result-content">
              <h1>What type of non-voter are you?</h1>
              <div className="row">
                <div className="col-md-7">
                  <h3 className="lead-in">You are:</h3>
                  <h2 className="result-heading">{result.name}</h2>
                  <div className="result-description" dangerouslySetInnerHTML={{__html: result.description}}></div>
                </div>   
                  
                <div className="col-md-4 offset-md-1 other-menu">
                  <p>Explore other types of non-voters</p>
                  <ul>
                    {results.map((type) => { 
                      return type.name !== result.name
                        ? <li key={type.name}>
                          <Link to={type.path}>{ type.name }</Link>
                        </li>
                        : ""
                    })}
                  </ul>
                  </div>
              </div>
              </div>
          </div>
          </div>
        </div>
    );
  }
}

export default QuizResult;
