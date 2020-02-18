import React from 'react'
import { Link } from 'react-router-dom'
import './landing.scss'
import * as ScrollMagic from "scrollmagic"; 
import { TweenMax, TimelineMax, Linear } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import PopupWindow from './PopupWindow' 
import InstaWindow from './InstaWindow'
import { CountUp } from 'countup.js'
import SwingStatesChart from '../SwingStates/SwingStatesChart'
import LandingQuiz from './LandingQuiz'
import Button from '../Shared/Button'
//Video elements
import VideoBlock from '../Videos/VideoBlock'
import VideoPlayer from '../Videos/VideoPlayer'
import SocialLinks from '../Shared/SocialLinks';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


class Landing extends React.Component {

    componentDidMount() { 
        var controller = new ScrollMagic.Controller();

         // Voting sign falling down
         var signTween = TweenMax.to("#sign", 1, { rotation: 40, y:400, opacity: 0, ease: Linear.easeNone });
         new ScrollMagic.Scene({
             triggerElement: '#interviews',
             offset: 0,
             triggerHook: 1,
             duration: 1000
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
        
            // Emerging dashes
            var dashesTween = TweenMax.to(".dashes-wrap", .5, { height: 800, ease: Linear.easeNone });
            new ScrollMagic.Scene({
                triggerElement: '#dashes',
                duration: 800,
                triggerHook: .5
            })
                .setTween(dashesTween)
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
             
                // Losing voters
            var losingVotersTween = TweenMax.to(".disappear", .5, { opacity: 0, ease: Linear.easeNone });
            new ScrollMagic.Scene({
                triggerElement: '#losingVoters',
                duration: 400,
            })
                .setTween(losingVotersTween)
                .addTo(controller); 
    }

    render() {

        return (
            <div className="landing-page">
                <section id="intro">
                    <div className="wrap">
                        <div className="row">
                            <div className="col-md-6">
                            <h2>During the 2016 presidential election nearly 100 million people, almost half of the eligible voting population in America, <span className="red">did not cast a vote.</span></h2>
                        </div>
                        </div>
                    </div>
                    <div id="sign"><img src="/images/100M_story_sign.svg" alt="Voting Sign" /></div>
                </section>

                <section id="interviews">
                    <div className="wrap">
                        <div className="col-md-6">
                        In 2020, Knight Foundation released a study of over
                    </div>
                        <div className="number" id="countup-12000">10,234</div>
                        <div className="col-md-6 offset-md-6">
                            <p>chronic non-voters in America, across the country and in key battleground states.</p>
                            <p>The study sought to understand who they are, what they care about and surface insights about why they don’t vote.</p>
                        </div>

                        <div className="explainer-video">
                        <div className="video-thumbnail">
                            <h3>But enough said, we'll let Ed Harris explain it for us</h3>
                                <VideoPlayer vimeoID="76979871" title="Explainer video">
                                    <VideoBlock video="test-video" playSign={true}/>
                                </VideoPlayer>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="quizQuestion">
                    <div className="wrap">
                        <h3>You probably have your own ideas about non-voters already.</h3>
                        <LandingQuiz />
                    </div>
                </section>

                <section id="reasons">
                    <div className="wrap text-center">
                        <h2>Top responses from non-voters</h2>
                        <p>Bar charts of the top responses.</p>
                    </div>
                </section>

                <section id="demographics">
                    <div className="wrap">
                        <div className="row">
                        <div className="col-md-8">
                            <h2>Non-voters do not necessarily fall into a certain gender, race, class, education level, or even political affiliation, and there are many reasons why they don’t vote.</h2>
                        </div>

                        <div className="col-md-6">
                            <VideoPlayer vimeoID="76979871" title="NYC video">
                                <VideoBlock video="test-video" playSign={true}/>
                            </VideoPlayer>
                        </div>

                        <div className="col-md-6">
                            <p>The top reasons non-voters cite is that they don’t like the candidates and feel their vote doesn’t matter. It can take a lot to convince habitual non-voters to vote as <VideoPlayer vimeoID="76979871" title="West Virginia video">a House of Delegates candidate in West Virginia found out.</VideoPlayer> Our study identified <Link to="typesofnonvoters">six types of non-voters.</Link></p>
                            </div>
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
                            <SwingStatesChart {...this.props} />
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
                        <div id="dashes"><div className="dashes-wrap"></div></div>
                        <div id="emerging-numbers">
                            <h3>Voters between</h3>
                            <div className="number yellow">18-24</div>     
                        </div>
                    </div>
                </section>

                <section id="emergingText">
                    <div className="wrap text-center">
                            <p>This group's behavior and trends will shape how the overall electorate moves in the coming years. </p>
                    </div>
                </section>

                <section id="browser">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-3 offset-md-1">
                                <InstaWindow image="https://66.media.tumblr.com/30243eb75aa86ee15c7f7f40923b148e/tumblr_pak3z2ET3g1r9qwkso1_500.jpg" />
                            </div>
                            <div className="col-md-4 offset-md-1">
                                <PopupWindow id="popup-3" text="The emerging electorate are more dissatisfied with President Trump than current voters and non-voters." />
                                <PopupWindow id="popup-2" text="Their top concerns are gun control, climate change, and racism, rather than immigration like active voters and non-voters." />
                                <PopupWindow id="popup-1" text="Alongside their disinterest in politics, they are also the least likely group to believe that increased participation in elections is a good thing." />
                            </div>
                            <div className="col-md-3">
                                <InstaWindow image="https://media.giphy.com/media/4pMX5rJ4PYAEM/giphy.gif"/>
                            </div>
                            </div>
                            </div>
                </section>

                <section id="losingVoters">
                    <div className="wrap text-center">
                        <h2><span className="disappear">Are we </span>losing<span className="disappear"> a generation of </span>voters?</h2>
                    </div>
                </section>

                <section id="conclusion">
                    <div className="wrap">
                        <div className="row">
                        <div className="col-md-6">
                            <p>The 100 Million Project began as a way to give voice to the concerns of American non-voters since election coverage tends to exclusively favor the opinions of “likely” voters.</p>
                            <p>However, because many non-voters as well as the emerging electorate will participate in the next election, the report ends as a measure of the country’s pulse in the lead up to November and acts as a clarion call for what can happen next.</p>
                            <a href="http://kf.org/100millionblog" target="_blank" rel="noopener noreferrer">Read the blog post</a>
                            <Button color="yellow" to="" >Read the Full report</Button>
                        </div>
                        <div className="col-md-3 offset-md-3">
                                <div className="black box">
                                    <h3> Not planning on voting?</h3>
                                    <p>Tell us why.</p>
                                    <SocialLinks />
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section id="next">
                    <div className="row">
                        <div className="col-md-4 next-item" id="explore">
                            <h2>Explore</h2>
                            <p>See how non-voters can impact swing states.</p>
                            <Button color="black" to="/swingstates">Explore</Button>
                        </div>
                        <div className="col-md-4 next-item" id="watch">
                            <h2>Watch</h2>
                            <p>Travel to Arizona, West Virginia and New York to learn why some citizens chose not to vote.</p>
                            <Button color="black" to="/swingstates">Watch</Button>
                        </div>
                        <div className="col-md-4 next-item" id="learn">
                            <h2>Learn</h2>
                            <p>Are you a younf moderate, a frustrated conservative or a non-participator?</p>
                            <Button color="black" to="/swingstates">Learn</Button>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Landing