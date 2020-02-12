import React from 'react'
import { Link } from 'react-router-dom'
import './landing.scss'

class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: 0
        };

        this.answerRef = React.createRef()  
    
        this.answerQuiz = this.answerQuiz.bind(this)
    }
    
    answerQuiz(index) { 
        this.setState({
            answer: index
        })
        window.scrollTo(0, this.answerRef.current.offsetTop)
    }

    render() {
        let quizOptions = ['Ignorance of the issues', 'Laziness', 'Candidates lack appeal', 'Mistrust in elections', 'Disinterest']
        let quizAnswers = {
            0: 'Many non-voters polled said their dislike of the candidates was a major reason why they did not vote in the last election, followed closely behind their mistrust in elections.',
            1: 'Many voters agree. XX% of those polled in fact. However, according to our research, the two major reasons why people didn’t vote in 2016 were because the candidates lacked appeal and because of their mistrust in elections.',
            2: 'Many voters agree. XX% of those polled in fact. However, according to our research, the two major reasons why people didn’t vote in 2016 were because the candidates lacked appeal and because of their mistrust in elections.',
            3: 'Good choice. Many non-voters polled said their dislike of the candidates was a major reason why they did not vote in the last election, followed closely behind their mistrust in elections.',
            4: 'Although mistrust in elections is a significant factor, it was not as large as non-voters’ dislike for the candidates, which more people reported as the main reason why they didn’t vote during the 2016 election.',
            5: 'Many voters agree. XX% of those polled in fact. However, according to our research, the two major reasons why people didn’t vote in 2016 were because the candidates lacked appeal and because of their mistrust in elections.'
        }

        return (
            <div className="landing-page">
                <section id="intro">
                    <div className="wrap">
                        <h2>During the 2016 presidential election, nearly half of the eligible voting population in America—100 million people— <span className="red">did not cast a vote.</span></h2>
                        <a className="button yellow">WHAT?</a>
                        <a className="button">Download the Study</a>
                        <div id="sign">Illustration of a voting sign</div>
                    </div>
                </section>

                <section id="interviews">
                    <div className="wrap">
                        <div className="col-md-6">
                            Two years ago, we began interviewing and polling over
                    </div>
                        <div className="numbers">
                            12,000
                    </div>
                        <div className="col-md-6 offset-md-6">
                            voting-eligible Americans in red, blue, and swing states to discover why non-voters choose to be silent.
                    </div>
                    </div>
                </section>

                <section id="quizQuestion">
                    <div className="wrap">
                        <h3>But probably, you have your own ideas about non-voters already.</h3>
                        <h2>Why do you think a person doesn’t vote?</h2>
                        <ul>
                            {quizOptions.map((option, index) => {
                                return <li onClick={() => this.answerQuiz(index + 1)} key={index}>
                                        <div class={this.state.answer == index + 1 ? "box active" : "box"}></div> {option}
                                    </li>
                            })}
                        </ul>
                    </div>
                </section>

                <section id="quizAnswer" ref={this.answerRef}>
                    <div className="wrap">
                        {quizAnswers[this.state.answer]}
                    </div>
                </section>

                <section id="demographics">
                    <div class="wrap">
                        <div class="col-md-8">
                            <h2>Non-voters do not necessarily fall into a certain gender, race, class, education level, or even political affiliation. </h2>
                        </div>
                        <div class="col-md-6 offset-md-6">
                            <p>Many cite poor-quality and corrupt elected officials, political fundraising, special interest dominance, and media bias among the reasons why they don’t vote. It can take a lot to convince habitual non-voters to vote as <Link>a House of Delegates candidate in West Virginia found out.</Link> Our study identified <Link>six types of non-voters.</Link></p>
                            <Link className="button">Why do non-voters matter?</Link>
                        </div>
                    </div>
                </section>

                <section id="swingStates">
                    <div class="wrap">
                        <div class="col-md-6">
                            <p>Although non-voters are evenly distributed across party lines, as a bloc, they could greatly impact swing states in the next election.</p>
                            </div>
                        <div class="col-md-6">
                        <div class="number">71%</div>
                            <p>of non-voters polled said they intend on voting in the next election.</p>
                            </div>
                    </div>
                </section>

                <section id="mistrust">
                    <div class="wrap">
                        <div className="col-md-6">
                            <p>In addition to their mistrust in elections, many non-voters cited a lack of education on current political issues and how elections could personally impact them. Non-voters also want candidates they can believe in. By going door-to-door with issue-based education, one community in Arizona increased voter registration among non-English-speaking eligible voters and elected <Link>their county’s first Latino candidate.</Link></p>
                            <p>However, there’s one group even less interested and informed than habitual non-voters, and they are the emerging electorate.</p>
                            </div>
                    </div>
                </section>

                <section id="emerging">
                    <div class="wrap">
                        <h2>The emerging electorate are</h2>
                        dashes
                        <p>Voters between</p>
                        <div class="number yellow">18-24</div>
                        <p>this group's behavior and trends will shape how the overall electorate moves in the coming years. </p>
                    </div>
                </section>

                <section id="conclusion">
                    <div className="wrap">
                        <p>The 100 Million Project began as a way to give voice to the concerns of American non-voters since election coverage tends to exclusively favor the opinions of “likely” voters.</p>
                        <p>However, because many non-voters as well as the emerging electorate will participate in the next election, the report ends as a measure of the country’s pulse in the lead up to November and acts as a clarion call for what can happen next.</p>
                        <Link path="quiz" className="button">What non-voter are you?</Link>
                    </div>
                </section>

            </div>
        )
    }
}

export default Landing