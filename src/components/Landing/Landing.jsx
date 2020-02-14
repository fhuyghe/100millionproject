import React from 'react'
import { Link } from 'react-router-dom'
import './landing.scss'
import * as ScrollMagic from "scrollmagic"; 
import { TweenMax, TimelineMax, Linear } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import PopupWindow from './PopupWindow' 
import InstaWindow from './InstaWindow'
import { CountUp } from 'countup.js'
//Video elements
import VideoBlock from '../Videos/VideoBlock'
import VideoPlayer from '../Videos/VideoPlayer'

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


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

    componentDidMount() { 
        var controller = new ScrollMagic.Controller();

         // Voting sign falling down
         var signTween = TweenMax.to("#sign", 1, { rotation: 40, y:400, opacity: 0, ease: Linear.easeNone });
         new ScrollMagic.Scene({
             triggerElement: '#sign',
             offset: 350,
             triggerHook: 1,
             duration: 800
         })
             .setTween(signTween)
             .addTo(controller);

        //Counting up to 12,000
        new ScrollMagic.Scene({
            triggerElement: "#countup-12000",
            duration: 200,
            reverse: false,
            triggerHook: 1 //Start at bottom of page
        })
            .addTo(controller)
            .on("enter", function (e) {
                var countUp = new CountUp('countup-12000', 12000, {startVal: 10234, duration: 1});
                countUp.start();
            })

        // build Swing State rotation tween
        var tween = TweenMax.to(".swing-text", 1, { rotation: -20, ease: Linear.easeNone });
        new ScrollMagic.Scene({
            triggerElement: '.swing-text',
            duration: 1000
        })
            .setTween(tween)
            .addTo(controller); 
        
        // Browser 18-24 animation
        new ScrollMagic.Scene({
            triggerElement: '#browser',
            duration: 1000,
            triggerHook: 0
        })
            .setPin('#browser')
            .addTo(controller); 
        
        var popupTween1 = TweenMax.to("#popup-1", 1, {y:-1000, ease: Linear.easeNone });
        new ScrollMagic.Scene({
            triggerElement: '#browser',
            duration: 500,
            triggerHook: 0
        })
            .setTween(popupTween1)
            .addTo(controller);
        
        var popupTween2 = TweenMax.to("#popup-2", 1, { y: -1000, ease: Linear.easeNone });
        new ScrollMagic.Scene({
            triggerElement: '#browser',
            offset: 500,
            duration: 500,
            triggerHook: 0
        })
            .setTween(popupTween2)
            .addTo(controller);
        
            var popupTween3 = TweenMax.to("#popup-3", 1, { y: -500, ease: Linear.easeNone });
            new ScrollMagic.Scene({
                triggerElement: '#browser',
                offset: 1000,
                duration: 500,
                triggerHook: 0
            })
                .setTween(popupTween3)
                .addTo(controller);
        
            // 18-24 popup
            var emergingTween = TweenMax.to("#emerging-numbers", .5, { opacity: 1, scale: 1, ease: Linear.easeNone });
            new ScrollMagic.Scene({
                triggerElement: '#emerging-numbers',
                duration: 300,
                triggerHook: .8
            })
                .setTween(emergingTween)
                .addTo(controller); 
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
                        {/* <a className="button yellow">WHAT?</a>
                        <a className="button">Download the Study</a> */}
                    </div>
                    <div id="sign"><img src="/images/100M_story_sign.svg"/></div>
                </section>

                <section id="interviews">
                    <div className="wrap">
                        <div className="col-md-6">
                            In 2020, Knight Foundation released a study of
                    </div>
                        <div className="number" id="countup-12000">10,234</div>
                        <div className="col-md-6 offset-md-6">
                            <p>chronic non-voters in America, across the country and in key battleground states.</p>
                            <p>The study sought to understand who they are, what they care about and surface insights about why they don’t vote.</p>
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
                                        <div className={this.state.answer === index + 1 ? "box active" : "box"}></div> {option}
                                    </li>
                            })}
                        </ul>
                    </div>
                </section>

                <section id="quizAnswer" ref={this.answerRef}>
                    <div className="wrap">
                        <p>{quizAnswers[this.state.answer]}</p>
                    </div>
                </section>

                <section id="demographics">
                    <div className="wrap">
                        <div className="col-md-8">
                            <h2>Non-voters do not necessarily fall into a certain gender, race, class, education level, or even political affiliation. </h2>
                        </div>
                        <div className="col-md-6 offset-md-6">
                            <p>Many cite poor-quality and corrupt elected officials, political fundraising, special interest dominance, and media bias among the reasons why they don’t vote. It can take a lot to convince habitual non-voters to vote as <VideoPlayer vimeoID="76979871" title="West Virginia video">a House of Delegates candidate in West Virginia found out.</VideoPlayer> Our study identified <Link to="typesofnonvoters">six types of non-voters.</Link></p>
                        </div>
                    </div>
                </section>

                <section id="swingStates">
                    <div className="wrap">
                        <div className="swing-animation">
                            <div className="swing-text">
                                <span>Swing</span>
                                <span>States</span>
                            </div>
                            <div className="swing-triangle"></div>
                        </div>

                        <div className="col-md-6">
                            <p>Although non-voters are evenly distributed across party lines, as a bloc, they could greatly impact swing states in the next election.</p>
                            </div>
                        <div className="col-md-6 offset-md-6">
                        <div className="number">71%</div>
                            <p>of non-voters polled said they intend on voting in the next election.</p>
                        </div>

                        <div id="swingData">
                            <h2>Explore the data</h2>
                        </div>
                    </div>
                </section>

                <section id="mistrust">
                    <div className="wrap">
                        <div className="row">
                            <div className="col-md-6">
                                <p>In addition to their mistrust in elections, many non-voters cited a lack of education on current political issues and how elections could personally impact them. Non-voters also want candidates they can believe in. By going door-to-door with issue-based education, one community in Arizona increased voter registration among non-English-speaking eligible voters and elected <VideoPlayer vimeoID="76979871" title="Arizona video">their county’s first Latino candidate.</VideoPlayer></p>
                            </div>
                            <div className="col-md-6">
                            <VideoBlock video="test-video"/>
                            </div>
                        </div>
                        <h3 className="text-center">However, there’s one group even less interested and informed than habitual non-voters, and they are the emerging electorate.</h3>
                    </div>
                </section>

                <section id="emerging">
                    <div className="wrap">
                        <h2>The emerging electorate are</h2>
                        <div className="dashes"></div>
                        <p>Voters between</p>
                        <div className="number yellow" id="emerging-numbers">18-24</div>
                        <p>this group's behavior and trends will shape how the overall electorate moves in the coming years. </p>
                    </div>
                </section>

                <section id="browser">
                    <div className="wrap">
                        <div className="row">
                            <div className="col-md-3">
                                <InstaWindow image="https://66.media.tumblr.com/30243eb75aa86ee15c7f7f40923b148e/tumblr_pak3z2ET3g1r9qwkso1_500.jpg" />
                            </div>
                            <div className="col-md-6">
                                <PopupWindow id="popup-3" text="The emerging electorate are more dissatisfied with President Trump than current voters and non-voters. " />
                                <PopupWindow id="popup-2" text="When they do encounter the news, it’s often when it’s bumped into on social media where it exists alongside other kinds of content." />
                                <PopupWindow id="popup-1" text="Social media, gaming, and streaming services all outpace traditional news sources in this group’s media consumption." />
                            </div>
                            <div className="col-md-3">
                                <InstaWindow image="https://media.giphy.com/media/4pMX5rJ4PYAEM/giphy.gif"/>
                            </div>
                            </div>
                    </div>
                </section>

                <section id="conclusion">
                    <div className="wrap">
                        <p>The 100 Million Project began as a way to give voice to the concerns of American non-voters since election coverage tends to exclusively favor the opinions of “likely” voters.</p>
                        <p>However, because many non-voters as well as the emerging electorate will participate in the next election, the report ends as a measure of the country’s pulse in the lead up to November and acts as a clarion call for what can happen next.</p>
                        <Link to="typesofnonvoters" className="button">What non-voter are you?</Link>
                    </div>
                </section>

            </div>
        )
    }
}

export default Landing