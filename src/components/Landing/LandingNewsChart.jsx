import React from 'react'
import './LandingNewsChart.scss'

const LandingNewsChart = () => { 
    return (
        <div className="landing-news-chart-wrap">
            <div className="landing-seek-chart">
                <div className="header">
                    <h3>Choose the statement that best describes you.</h3>
                </div>
                <div className="content">
                <div className="line"></div>
                <div className="legend-wrap">
                    <div className="legend1">"I actively seek out news and information"</div>
                    <div className="legend2">"I mostly bump into news and information as I do other things or hear about it from others"</div>
                </div>
                
                <p>Voters</p>
                <div className="results-wrap voters">
                    <div className="result-wrap1"><div className="result">73%</div></div>
                    <div className="result-wrap2"><div className="result">27%</div></div>
                </div>
                <p>Non-Voters</p>
                <div className="results-wrap non-voters">
                    <div className="result-wrap1"><div className="result">56%</div></div>
                    <div className="result-wrap2"><div className="result">44%</div></div>
                    </div>
                    </div>
            </div>

            <div className="landing-info-chart">
                <div className="header">
                    <h3>When national elections are coming up, do you typically feel like you have enough information about candidates and issues to decide who to vote for?</h3>
                </div>
                
                <div className="content">
                <p>Voters</p>
                <div className="results-wrap voters">
                    <div className="result1">80% Yes</div>
                    <div className="result2">15% No</div>
                        <div className="result3">
                            {/* 5% Don't know */}
                            </div>
                </div>
                <p>Non-Voters</p>
                <div className="results-wrap non-voters">
                    <div className="result1">59% Yes</div>
                    <div className="result2">29% No</div>
                        <div className="result3">
                            {/* 12% Don't Know */}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingNewsChart