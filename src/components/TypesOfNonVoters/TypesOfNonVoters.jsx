import React from 'react';
import { Link } from 'react-router-dom'
import './TypesOfNonVoters.scss'
import { results } from "../../Data/quizData";

class TypesOfNonVoters extends React.Component {

    render() { 

        let displayTypes = results.map((type) => {
            return <div className="type col-md-6 ">
                <div className={"type-wrap " + type.color}>
                <h3>{type.name}</h3>
                    <div dangerouslySetInnerHTML={{ __html: type.description }}></div>
                    </div>
            </div>
        })

        return (
            <div id="typesPage">
                <section id="intro">
                    <div className="wrap text-center">
                        <h1>What type of non-voter are you?</h1>
                        <Link className="button black" to="/typesofnonvoters/quiz">Take the Quiz</Link>
                    </div>
                </section>
                <section id="allTypes">
                    <div className="wrap">
                        <h2>All Types of Non Voters</h2>
                        <p>Who are the “typical” non-voters? In order to further refine understanding of the types of Americans who make up the non-voting population, the study used a statistical technique called “cluster analysis.” This approach revealed 6 distinct groups within the non-voter universe, each with its own unique demographic make-up, news consumption habits, opinions on politics and reasons for not voting. These 6 clusters fall broadly into two categories</p>
                        <div className="types">
                        <div className="row">
                            {displayTypes}
                            </div>
                            </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default TypesOfNonVoters;
