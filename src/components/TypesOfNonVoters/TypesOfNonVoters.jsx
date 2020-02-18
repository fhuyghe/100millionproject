import React from 'react';
import Button from '../Shared/Button'
import DrawerToggle from '../Shared/DrawerToggle'
import './TypesOfNonVoters.scss'
import { results } from "../../Data/quizData";

class TypesOfNonVoters extends React.Component {

    render() { 

        let displayTypes = results.map((type) => {
            return <div className="type col-md-6" key={type.path}>
                <div className={"type-wrap " + type.color}>
                    <h3>{type.name}</h3>
                    <h4>{type.percentage + "%"} of non-voters</h4>
                    <p>{type.description}</p>
                    <DrawerToggle title="Behavior">
                    {type.behaviors.map(data => { 
                        console.log(data)
                        return <p>{data}</p>
                    })}
                    </DrawerToggle>
                    <DrawerToggle title="Demographics">
                    {type.demographics.map(data => { 
                        return <p>{data}</p>
                    })}
                    </DrawerToggle>
                    </div>
            </div>
        })

        return (
            <div id="typesPage">
                <section id="intro">
                    <div className="wrap text-center">
                        <h1>What type of non-voter are you?</h1>
                        <Button color="yellow" to="/typesofnonvoters/quiz">Take the Quiz</Button>
                    </div>
                </section>

                <section id="typeChart">
                    <div className="wrap">
                        <div className="types-wrap">
                    {
                        results.map((type) => {
                            return <div className="type" style={{
                                width: type.percentage + "%"
                            }}>
                                <p>{type.name}</p>
                                <div className={"type-wrap " + type.color}>
                                {type.percentage}%
                                </div>
                            </div>
                         })
                        }
                    </div>
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
