import React from 'react'
import { Link } from 'react-router-dom'
import './landing.scss'
import * as ScrollMagic from "scrollmagic"; 
import { TweenMax, TimelineMax, Linear } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import PopupWindow from './PopupWindow' 
import { CountUp } from 'countup.js'
import LandingQuiz from './LandingQuiz'
import Button from '../Shared/Button'
//Charts
import SwingStatesChart from '../SwingStates/SwingStatesChart'
import SingleChart from '../Charts/SingleChart'
import { landingData } from '../../Data/sharedData'
import LandingNewsChart from './LandingNewsChart'
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
        var swingTween = TweenMax.to(".swing-text", 1, { rotation: -20, ease: Linear.easeNone });
        new ScrollMagic.Scene({
            triggerElement: '.swing-text',
            duration: 1000,
            triggerHook: .8
        })
            .setTween(swingTween)
            .addTo(controller); 
        
            // Text bubble
        var bubbleTween = TweenMax.to(".bubble", 1, { x: 1000, ease: Linear.easeNone });
        new ScrollMagic.Scene({
            triggerElement: '.bubble',
            duration: 500,
            triggerHook: .5
        })
            .setTween(bubbleTween)
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
                triggerHook: .8
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
            var losingVotersTween = TweenMax.to(".disappear", 1, { opacity: 0, ease: Linear.easeNone });
            new ScrollMagic.Scene({
                triggerElement: '#losingVoters',
                duration: 400,
                triggerHook: .3
            })
                .setTween(losingVotersTween)
                .addTo(controller); 
    }

    render() {

        return (
            <div className="landing-page">
                <section id="conclusion">
                    <div className="wrap">
                        <div className="row">
                        <div className="col-md-8 col-lg-6">
                                <div className="text">
                                <h3>The 100 Million Project began as a way to illuminate the challenges that need to be addressed if disengaged voters are to be enticed to the polls.</h3>
                                <p>Though they make up a large portion of our population, these Americans receive little-to-no attention in national political conversations, and remain a mystery to many institutions. As organizations seek to reach and motivate the disengaged electorate, information from this project should help inform their work.</p>
                                <p>The 100 Million Project helps dispel outdated assumptions about non-voters. These are our fellow citizens, and they come from every walk of life. But there are some factors that unite them, which we examine in this report. By bringing to life this diverse group and their views on politics, the study acts as a clarion call to energize a new generation of engaged citizens — and ensure all citizens have a voice in our democracy.</p>
                                <p>Read our follow up article on <a href="http://kf.org/100millionblog" target="_blank" rel="noopener noreferrer">Medium</a>.</p>
                                </div>
                                    <Button color="yellow" url="https://kf.org/100million" >Download the report</Button>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 offset-lg-3">
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
                            <p>Travel to Arizona, West Virginia and New York to learn why some citizens who can vote, don’t.</p>
                            <Button color="black" to="/videos">Watch</Button>
                        </div>
                        <div className="col-md-4 next-item" id="learn">
                            <h2>Learn</h2>
                            <p>Are you a modern moderate, a traditional conservative or a unattached apolitical?</p>
                            <Button color="black" to="/typesofnonvoters">Learn</Button>
                        </div>
                    </div>
                </section>
                <section id="intro">
                    <div className="wrap">
                        <div className="row">
                            <div className="col-lg-6">
                            {/* <VideoPlayer active={true} url="https://youtu.be/9nDwFBWk0ZA" title=""></VideoPlayer> */}
                            <h2>During the 2016 presidential election nearly 100 million people, almost half of the eligible voting population in America, <span className="red">did not cast a vote.</span></h2>
                            </div>
                        </div>
                    </div>
                    <div id="sign"><img src="/images/100M_story_sign.svg" alt="Voting Sign" /></div>
                    <div id="arrow"><img src="/images/scroll-arrow-2.png" alt="" /></div>
                </section>

                <section id="interviews">
                    <div className="wrap">
                        <div className="col-md-6">
                        <h4>In 2020, Knight Foundation released a study of over</h4>
                    </div>
                        <div className="number" id="countup-12000">10,234</div>
                        <div className="col-md-6 offset-md-6">
                            <h4>chronic non-voters in America, across the country and in key battleground states.</h4>
                            <h4>The study sought to understand who they are, what they care about and surface insights about why they don’t vote.</h4>
                        </div>
                        <div className="explainer-video">
                        <div className="video-thumbnail">
                            <h3>Who Are the 100 Million?</h3>
                                <VideoPlayer url="https://youtu.be/9nDwFBWk0ZA" title="Who Are the 100 Million?">
                                    <VideoBlock video="explainer" playSign={true}/>
                                </VideoPlayer>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="quizQuestion">
                    <div className="wrap">
                        <div className="bubble">
                            <img src="images/but-probably-bubble.svg" alt="But you probably have some ideas of your own." />
                        </div>
                        <LandingQuiz />
                    </div>
                </section>

                <section id="reasons">
                    <div className="wrap">
                        <h2>Non-voters do not necessarily fall into a certain gender, race, class, education level, or even political affiliation, and there are <span>many reasons why they don’t vote.</span></h2>
                        {/* TODO: Add title based on prop */}
                        <SingleChart title="Top responses from non-voters" color="yellow" maxValue={20} data={landingData[0]} />
                    </div>
                </section>

                <section id="demographics">
                    <div className="wrap">
                        <div className="row">

                        <div className="col-md-6">
                            <VideoPlayer url="https://youtu.be/FpwVUIYJNa0" vimeoID="76979871" title="49th Out of 50 and Still Running">
                                    <VideoBlock
                                        video="west-virginia"
                                        playSign={true} />
                            </VideoPlayer>
                        </div>

                            <div className="col-md-6">
                                <h3>49th Out of 50 and Still Running</h3>
                            <p>It can take a lot to convince habitual non-voters to vote as <VideoPlayer vimeoID="76979871" title="West Virginia video">a House of Delegates candidate in West Virginia found out.</VideoPlayer></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="demography">
                    <div className="wrap">
                        <div className="row">
                            <div className="col-md-9">
                            <h2>Compared to active voters, non-voters are more likely to be less educated, lower income,  non-white and unmarried.</h2>
                            </div>
                            {/* <div className="col-md-6">
                                <SingleChart color="yellow" maxValue={20} data={landingData[2]} />
                            </div> */}
                            <div className="col-md-12">
                                <div className="desktop-only">
                                    <SingleChart color="yellow" maxValue={40} data={landingData[3]} />
                                </div>
                                <div className="mobile-only">
                                    <SingleChart type="bar-vertical" color="green" maxValue={40} data={landingData[3]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="types">
                    <div className="wrap">
                        <img alt="" src="images/type-indifferent-average.svg" className="type" />
                        <img alt="" src="images/type-underemployed-unsure.svg" className="type" />
                        <img alt="" src="images/type-established-progressives.svg" className="type" />
                        <img alt="" src="images/type-traditional-conservatives.svg" className="type" />
                        <img alt="" src="images/type-unattached-apolitical.svg" className="type" />
                        <img alt="" src="images/type-modern-moderates.svg" className="type" />
                        <div className="row">
                            <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1 text-center">
                                <h4>Although there is not one way to define a non-voter, our study identified <Link to="/typesofnonvoters">six types of non-voters.</Link></h4>
                                <VideoPlayer url="https://youtu.be/jEZxvrCFuxEv" imeoID="76979871" title="Non-voters are as Diverse as N.Y.C.">
                                    <VideoBlock
                                        video="new-york"
                                        playSign={true} />
                                </VideoPlayer>
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
                        <div className="col-md-10 col-lg-8 offset-lg-2 offset-md-1 text-center">
                            <h4>Although non-voters are fairly split across party lines nationally, there are clearer preferences for President in 2020 across swing states.</h4>
                        </div>

                        <div id="swingData">
                            <h2>Explore the Swing States</h2>
                            <SwingStatesChart {...this.props} />
                        </div>
                    </div>
                </section>

                <section id="personalImpact">
                    <div className="wrap">
                        <div className="row">
                            <div className="col-md-10">
                                <h2>In addition to consuming less news and information on political issues, non-voters are also less certain that decisions made in Washington personally impact them.</h2>
                            </div>
                        </div>
                        <div className=""></div>
                        <div className="desktop-only">
                            <SingleChart
                                color="red"
                                maxValue={10}
                                data={landingData[4]} />
                        </div>
                        <div className="mobile-only">
                            <SingleChart
                                type="bar-vertical"
                                color="red"
                                maxValue={10}
                                data={landingData[4]} />
                        </div>
                    </div>
                    
                    <div className="wrap">
                        <div className="row space-up">
                            <div className="col-md-6">
                                <h3>Organizing in 2016's Lowest Voting Congressional District</h3>
                                <p>Non-voters also want candidates they can believe in. By going door-to-door with issue-based education, one community in Arizona increased voter registration among non-English-speaking eligible voters and elected <VideoPlayer vimeoID="76979871" title="Arizona video">their district’s first Latino candidate.</VideoPlayer></p>
                            </div>
                            <div className="col-md-12">
                            <VideoPlayer url="https://www.youtube.com/watch?v=1lDBucwaqK4" title="Organizing in 2016's Lowest Voting Congressional District">
                                    <VideoBlock video="arizona" playSign={true} />
                                </VideoPlayer>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="news">
                    <div className="wrap">
                        <div className="row">
                        <div className="col-md-6">
                        <h2 className="news-intro">One of the clearest findings of the study is that non-voters feel (and are) <span>under-informed on political issues</span>.</h2>
                            </div>
                            <div className="col-md-5 offset-md-1">
                            <p>Compared with active voters, non-voter media diets involve less traditional news and more entertainment, and these individuals were less likely to grow up in a family that discussed current events together.</p>
                            </div>
                        </div>

                        <LandingNewsChart />
                    </div>
                </section>

                <section id="emerging">
                    <div className="wrap">
                    <h2 className="emerging-intro text-center">However, there’s one group even <span>less interested and informed</span> than habitual non-voters — the emerging electorate.</h2>
                        <div id="dashes"><div className="dashes-wrap"></div></div>
                        <div id="emerging-numbers">
                            <h3>Eligible voters between</h3>
                            <div className="number yellow">18-24</div>     
                        </div>
                    </div>
                </section>

                <section id="emergingText">
                    <div className="wrap text-center">
                            <h4>This group's behavior and trends will shape how the overall electorate moves in the coming years. </h4>
                    </div>
                </section>

                <section id="browser">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 offset-md-1">
                                <div className="highlight desktop-only">
                                    <div className="number">39%</div>
                                    <p>of 18-24 year olds say they primarily access social media</p>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-4 offset-md-3 offset-lg-1">
                                <div className="popup-wrap">
                                    <PopupWindow id="popup-3" text="The 18-24 year olds are following news and information about politics even less closely than non-voters." />
                                    <PopupWindow id="popup-2" text="Social media, gaming, and streaming services all outpace traditional news sources in this group’s media consumption." />
                                    <PopupWindow id="popup-1" text="When they do encounter the news, it’s often when it’s bumped into on social media where it exists alongside other kinds of content." />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="highlight desktop-only">
                                    <div className="number">9%</div>
                                    <p>of 18-24 year olds say they primarily access news</p>
                                </div>
                            </div>
                            </div>
                    </div>
                </section>

                <section id="losingVoters">
                    <div className="wrap text-center">
                        <h4>The emerging electorate are more dissatisfied with President Trump than current voters and non-voters. A significant portion would rather vote for the Democratic Party’s nominee  (38%) than re-elect President Trump (22%)</h4>
                        <h2><span className="disappear">Are we </span>losing<span className="disappear"> a generation of </span>voters?</h2>
                    </div>
                </section>

            </div>
        )
    }
}

export default Landing