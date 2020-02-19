import React from 'react'
import Button from '../Shared/Button'
import './About.scss'

const About = () => {

    return <div id="aboutPage">
        <section id="knight">
            <div className="wrap">
                <h2>About the John S. and James L. Knight Foundation</h2>
                <p>Knight Foundation is a national foundation with strong local roots. We invest in journalism, in the arts, and in the success of cities where brothers John S. and James L. Knight once published newspapers. Our goal is to foster informed and engaged communities, which we believe are essential for a healthy democracy.</p>
                <p>For more, visit <a href="https://kf.org" target="_blank" rel="noopener noreferrer">kf.org</a>.</p>
            </div>
        </section>

        <section id="about">
            <div className="wrap">
                <h2>Why Knight funded the 100 Million Project</h2>
                <p>We’re well into campaign season in what could be one of the most divisive elections in living memory. But while the polls and pundits will focus on the “likely voters” who reliably cast ballots, nearly 100 million non-voters — and the underlying causes keeping them home on Election Day — will likely be ignored. While the Americans who do turn out will drive the election result, so much of the underlying health of our democracy can be assessed by looking at those who don’t turn out—and asking why.</p>
                <p>That’s why Knight Foundation commissioned Bendixen and Amandi International to develop a landmark study of 12,000 chronic non-voters, nationwide and in key battleground states. No previous study has surveyed this segment of the electorate at such depth and scale. Knight foundation is focused on ensuring the enduring strength of our representative democracy. And a truly representative democracy is just that: one defined by the broad and representative participation of its people.</p>
                <p>Voting is a fundamental form of democratic engagement, but the United States lags behind most of the world’s 36 developed democracies in terms of voter turnout. And it’s a long running trend, according to U.S. Census Bureau data, that active voters over-represent certain groups (the college educated, upper income and older) and under-represent others. This has ramifications on the capacity of our elected government to mirror the values of its entire citizenry.</p>
                <p>A deeper understanding of non-voter views around politics and participation should serve as critical context for those seeking to reach and motivate the disengaged electorate. Findings point to the need for greater education and transparency around electoral systems. Non-voters need to know how decisions made by elected officials impact their lives, why their civic engagement locally and nationally matters and where to find easy access to trusted information about candidates and issues.</p>
                <p>The Knight-funded 100 Million Project helps dispel outdated assumptions about non-voters. These are our fellow citizens, and they come from every walk of life. But there are some factors that unite them. In bringing to life this diverse group, the report provides insights that can support new ways to energize a new generation of engaged citizens—all in the service of our democracy.</p>
                <Button color="yellow" href="" target="_blank" rel="noopener noreferrer">Read the full article here</Button>
            </div>
        </section>
        <section id="team">
        <div className="wrap">
                <h2>The Team</h2>
                <h3>Bendixen & Amandi International</h3>
                <ul>
                    <li>Fernand Amandi
                        <h6>Principal</h6></li>
                    <li>Anthony Williams<h6>Project Director</h6></li>
                    <li>Dave Feldman<h6>Cluster Analysis Consultant</h6></li>
                    <li>Rick Hunter<h6>Methodological Consultant</h6></li>
                    <li>Hannah Artman<h6>Qualitative Research Coordinator</h6></li>
                    <li>Daniela Ferrera<h6>Research Associate</h6></li>
                    <li>Maurizio Passariello<h6>Communications Associate</h6></li>
                </ul>

                <h3>Academic Advisers</h3>
                <ul>
                    <li>Eitan Hersh
                    <h6>Associate Professor of Political Science at Tufts University</h6></li>
                    <li>Yanna Krupnikov
                    <h6>Asst. Professor of Political Science at Stony Brook University</h6></li>
                </ul>

                <h2>Review Committee</h2>
                <ul>
                    <li>Seth Flaxman
                        <h6>Co-Founder & Executive Director, Democracy Works</h6>
                    </li>
                    <li>Keesha Gaskins-Nathan
                        <h6>Director of Democratic Practice–US Program, Rockefeller Brothers Fund</h6></li>
                    <li>Nellie Gorbea
                        <h6>Secretary of State, Rhode Island</h6></li>
                    <li>Trey Grayson
                        <h6>Secretary of State (former), Kentucky</h6></li>
                    <li>Kei Kawashima-Ginsberg
                        <h6>Director of the Center for Information and Research on Civic Learning and Engagement (CIRCLE), Tufts University</h6></li>
                    <li>David Phoenix
                        <h6>Assistant Professor of Political Science, University of California-Irvine</h6></li>
                    <li>Trevor Potter
                        <h6>Chairman, US Federal Election Commission (former); President, Campaign Legal Center</h6></li>
                    <li>Meredith Rolfe
                        <h6>Associate Professor of Political Science, University of Massachusetts Amherst</h6></li>
                    <li>Ryan Streeter
                        <h6>Director of Domestic Policy Studies, American Enterprise Institute</h6></li>
                </ul>

                <h2>Video Series</h2>
                <h4>Produced by <a href="https://showofforce.com" target="_blank" rel="noopener noreferrer">Show of Force</a></h4>
                <ul className="video-credits">
                    <li><h5>Executive Producers</h5>
                        Joshua Bennett<br />Maro Chermayef<br />Jeff Dupre</li>
                    <li><h5>Director</h5>Alexandra Nikolchev</li>
                    <li><h5>Co-Producer</h5>Prisca Pointdujour</li>
                    <li><h5>Editor</h5>David Hoon Newman</li>
                    <li><h5>Cinematographer</h5>Ruben Pacheco</li>
                    <li><h5>Production Manager</h5>Maura McGloin</li>
                    <li><h5>Production Coordinator</h5>Jessica Luya</li>
                    <li><h5>Director Partnerships/Engagement</h5>Lauren Mitte Wood, Enfield Road</li>
                    <li><h5>Director Social engagement</h5>John Hill</li>
                    <li><h5>Music Composed by</h5>Daniel Olshansky</li>
                    <li><h5>Post Supervisor</h5>Dan Hacker</li>
                    <li><h5>Assistant Editor</h5>David Scherker</li>
                    <li><h5>Graphics and Animation</h5>13milliseconds<br/>Tim Ballard</li>
                    <li><h5>Assistant Camera</h5>Zara Katz<br/>Said Ramirez<br/>Jose Garcia</li>
                    <li><h5>Sound</h5>Mike Haldin<br/>Chris Mas</li>
                    <li><h5>Field Production Coordinator</h5>Jack Dalleywater</li>
                    <li><h5>Production Assistants</h5>Nathan Burge<br/>Tameika Dorman<br/>Erick Tello<br/>Julian Zentner</li>
                    <li><h5>DIT</h5>Sam Torres</li>
                    <li><h5>Colorist</h5>Evgeniy Yavtushenko</li>
                    <li><h5>Post Sound Mixer</h5>Dan Hacker</li>
                    <li><h5>Post Production Assistants</h5>Chelsea Laufer<br/>Hyeseung Kim<br/>Nicholas Okrepkie<br/>Brian Chen<br/>Kailey Radcliffe</li>
                    </ul>
                <h4>Website by <a href="https://13milliseconds.com" target="_blank" rel="noopener noreferrer">13milliseconds</a></h4>
                </div>
        </section>
    </div>

}

export default About