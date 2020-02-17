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
                <h2>About the project</h2>
                <p>We’re well into campaign season in what could be one of the most divisive elections in living memory. But while the polls and pundits will focus on the “likely voters” who reliably cast ballots, nearly 100 million non-voters — and the underlying causes keeping them home on Election Day — will likely be ignored.  While the Americans who do turn out will drive the election result, so much of the underlying health of our democracy can be assessed by looking at those who don’t turn out—and asking why.</p>
                <p>That’s why Knight Foundation commissioned Bendixen and Amandi International to develop a landmark study of 12,000 chronic non-voters, nationwide and in key battleground states. No previous study has surveyed this segment of the electorate at such depth and scale. Knight foundation is focused on ensuring the enduring strength of our representative democracy.  And a truly representative democracy is just that: one defined by the broad and representative participation of its people.</p>
                <p>Voting is a fundamental form of democratic engagement, but the United States lags behind most of the world’s 36 developed democracies in terms of voter turnout.[1]  And it’s a long running trend, according to U.S. Census Bureau data, that active voters over-represent certain groups (the college educated, upper income and older) and under-represent others.[2] This has ramifications on the capacity of our elected government to mirror the values of its entire citizenry.</p>
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
                    <li>Fernand Amandi, Principal</li>
                    <li>Anthony Williams, Project Director</li>
                    <li>Dave Feldman, Cluster Analysis Consultant </li>
                    <li>Rick Hunter, Methodological Consultant </li>
                    <li>Hannah Artman, Qualitative Research Coordinator </li>
                    <li>Daniela Ferrera, Research Associate </li>
                    <li>Maurizio Passariello, Communications Associate</li>
                </ul>

                <h3>Academic Advisers</h3>
                <ul>
                    <li>Eitan Hersh, Associate Professor of Political Science at Tufts University </li>
                    <li>Yanna Krupnikov, Asst. Professor of Political Science at Stony Brook University</li>
                </ul>

                <h3>Review Committee</h3>
                <ul>
                    <li>Seth Flaxman, Co-Founder & Executive Director, Democracy Works </li>
                    <li>Keesha Gaskins-Nathan, Director of Democratic Practice–US Program, Rockefeller Brothers Fund </li>
                    <li>Nellie Gorbea, Secretary of State, Rhode Island </li>
                    <li>Trey Grayson, Secretary of State (former), Kentucky </li>
                    <li>Kei Kawashima-Ginsberg, Director of the Center for Information and Research on Civic Learning and Engagement (CIRCLE), Tufts University </li>
                    <li>David Phoenix, Assistant Professor of Political Science, University of California-Irvine </li>
                    <li>Trevor Potter, Chairman, US Federal Election Commission (former); President, Campaign Legal Center</li>
                    <li>Meredith Rolfe, Associate Professor of Political Science, University of Massachusetts Amherst </li>
                    <li>Ryan Streeter, Director of Domestic Policy Studies, American Enterprise Institute</li>
                </ul>
                </div>
        </section>
    </div>

}

export default About