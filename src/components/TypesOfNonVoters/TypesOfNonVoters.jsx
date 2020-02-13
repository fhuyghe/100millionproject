import React from 'react';
import { Link } from 'react-router-dom'
import './TypesOfNonVoters.scss'

class TypesOfNonVoters extends React.Component {

    render() { 
        return (
            <div id="types-landing">
                <section id="intro">
                    <div className="wrap text-center">
                        <h1>Types of Non Voters</h1>
                        <p>Take the quiz to discover which types of non-voter you would be, or scroll down below to read about all of them.</p>
                        <Link className="button" to="/typesofnonvoters/quiz">Take the Quiz</Link>
                    </div>
                </section>
                <section id="allTypes">
                    <div className="wrap">
                        <h2>All Types of Non Voters</h2>
                        </div>
                </section>
            </div>
        )
    }
}

export default TypesOfNonVoters;
