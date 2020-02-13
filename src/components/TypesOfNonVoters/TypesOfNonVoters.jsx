import React from 'react';
import { Link } from 'react-router-dom'
import './TypesOfNonVoters.scss'
import { results } from "../../Data/quizData";

class TypesOfNonVoters extends React.Component {

    render() { 

        let displayTypes = results.map((type) => { 
            return <div className="type">
                <h3>{type.result}</h3>
                <div dangerouslySetInnerHTML={{ __html: type.description }}></div>
            </div>
        })

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
                        <p>Who are the “typical” non-voters? In order to further refine understanding of the types of Americans who make up the non-voting population, the study used a statistical technique called “cluster analysis.” This approach revealed 6 distinct groups within the non-voter universe, each with its own unique demographic make-up, news consumption habits, opinions on politics and reasons for not voting. These 6 clusters fall broadly into two categories</p>
                        <div className="types">
                            {displayTypes}
                            </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default TypesOfNonVoters;
