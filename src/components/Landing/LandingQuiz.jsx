import React from 'react'
import Button from '../Shared/Button'
import './LandingQuiz.scss'


class LandingQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answers: [false, false, false, false, false, false],
            revealAnswers: false
        };
    
        this.toggleAnswer = this.toggleAnswer.bind(this)
        this.checkQuiz = this.checkQuiz.bind(this)
    }

    toggleAnswer(index) { 
        let newAnswers = { ...this.state.answers }
        newAnswers[index] = !newAnswers[index]
        this.setState({
            answers: newAnswers
        })
    }

    checkQuiz() {
        let newAnswers = this.state.revealAnswers
            ? [false, false, false, false, false, false]
            : this.state.answers
        this.setState({
            answers: newAnswers,
            revealAnswers: !this.state.revealAnswers
        })
    }

    render() {

        let quizOptions = [{
            text: 'Less trust in the elections system',
            value: true
        },
                {
                    text: 'Far more likely to vote Democrat in 2020',
                    value: false
            },
            {
            text: 'Less consumption of news and information',
            value: true
            },
            {
            text: 'Do not believe that the government works to improve their lives',
            value: true
        },
        {
            text: 'Lower pride in the United States',
            value: false
        },
        {
            text: 'Believe special interest groups influence elections',
            value: true
        }
    ]
        let quizAnswers = [
            'Non-voters have less trust in the elections system than active voters.',
            'Non-voters have about the same level of pride in the United States as active voters.',
            'Non-voters consume less news and information than active votres.',
            'Non-voters believe that the government works to improve their lives more than active voters.',
            'Non-voters are pretty evenly split Democrat/Republican if they were to all vote in 2020, but also more likely than active voters to vote third party.',
            'Non-voters are less concerned about special interest groups influencing elections than active voters.'
        ]

        return (
            <div id="landingQuizWrap">
                <h2>Why do you think a person doesn’t vote?</h2>
                <ul>
            {quizOptions.map((option, index) => {
                        let validity = this.state.answers[index] === option.value
                return this.state.revealAnswers
                    ? <li className={validity ? "right" : "wrong"} key={option.text}>
                        <div className="question">
                            <div className={this.state.answers[index] ? "checkbox active" : "checkbox"}></div> {option.text}
                            </div>
                        <p>{validity ? "Right!" : "Nope!"} {quizAnswers[index]}</p>
                        </li>
                    : <li onClick={() => this.toggleAnswer(index)} key={index}>
                        <div className="question">
                            <div className={this.state.answers[index] ? "checkbox active" : "checkbox"}></div> {option.text}
                            </div>
                        </li>
                    })}
                </ul>
                <Button color="yellow" onClick={this.checkQuiz}>{
                    this.state.revealAnswers
                        ? "Refresh"
                        : "Submit"
                }</Button>
            </div>
        )
    }
}

export default LandingQuiz