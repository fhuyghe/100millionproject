import React from 'react'
import './LandingQuiz.scss'


class LandingQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            revealAnswer: null
        };
    
        this.toggleAnswer = this.toggleAnswer.bind(this)
    }

    toggleAnswer(index) { 
        this.setState({
            revealAnswer: this.state.revealAnswer === index ? null : index
        })
    }

    render() {

        let quizOptions = [
            {
                text: 'Non-voters are more concerned that special interest groups influence elections',
                value: false,
                answer: 'Nope! Non-voters are less concerned about special interest groups influencing elections than active voters. '
            },
            {
                text: 'Non-voters have less trust in the elections system',
                value: true,
                answer: 'Correct! Non-voters have less trust in the elections system than active voters.  '
            },
            {
                text: 'Non-voters are far more likely to vote Democrat in 2020',
                value: false,
                answer: 'Nope!   Non-voters are more evenly split Democrat/Republican if they were to all vote in 2020 than active voters,  but also more likely than active voters to vote third party.'
            },
            {
                text: 'Non-voters consume less news and information',
                value: true,
                answer: 'Correct! Non-voters consume less news and information than active voters. '
            },
            {
                text: 'Non-voters do not believe that the government works to improve their lives',
                value: false,
                answer: 'Nope! Non-voters believe that the government works to improve their lives more than active voters. '
            },
            {
                text: 'Non-voters have lower pride in the United States',
                value: false,
                answer: 'Nope! Non-voters have about the same level of pride in the United States as active voters.'
            }
        ]

        return (
            <div id="landingQuizWrap">
                <h2>Which of the following do you believe is <span>more true of non-voters</span> than active voters?</h2>
                <ul>
            {quizOptions.map((option, index) => {
                return this.state.revealAnswer === index
                    ? <li onClick={() => this.toggleAnswer(index)} className={option.value ? "right" : "wrong"} key={option.text}>
                        <div className="question">
                            <div className="checkbox active">
                                <img alt="check" src="images/check-mark.png" className="check" />
                                <img alt="cross" src="images/x-mark.png" className="cross" />
                            </div> {option.text}
                            </div>
                        <p>{option.answer}</p>
                        </li>
                    : <li onClick={() => this.toggleAnswer(index)} key={index}>
                        <div className="question">
                            <div className="checkbox"></div> {option.text}
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default LandingQuiz