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
