import React from 'react'
import './About.scss'

const About = () => {

    return <div id="aboutPage">
        <section id="about">
            <div className="wrap">
                <h2>About the project</h2>
                <p>Lorem ipsum</p>
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
        <section id="knight">
            <div className="wrap">
                <h2>About the John S. and James L. Knight Foundation</h2>
                <p>Knight Foundation is a national foundation with strong local roots.  We invest in journalism, in the arts, and in the success of cities where brothers John S. and James L. Knight once published newspapers. Our goal is to foster informed and engaged communities, which we believe are essential for a healthy democracy. </p>
                <p>For more, visit kf.org.</p>
            </div>
        </section>
    </div>

}

export default About