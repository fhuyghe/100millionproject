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
            revealAnswer: index
        })
    }

    render() {

        let quizOptions = [{
            text: 'Less trust in the elections system',
            value: true,
            answer: 'Non-voters have less trust in the elections system than active voters.'
            },
            {
                text: 'Far more likely to vote Democrat in 2020',
                value: false,
                answer: 'Non-voters have about the same level of pride in the United States as active voters.'
            },
            {
            text: 'Less consumption of news and information',
                value: true,
            answer: 'Non-voters consume less news and information than active votres.'
            },
            {
            text: 'Do not believe that the government works to improve their lives',
                value: true,
            answer: 'Non-voters believe that the government works to improve their lives more than active voters.'
        },
        {
            text: 'Lower pride in the United States',
            value: false,
            answer: 'Non-voters are pretty evenly split Democrat/Republican if they were to all vote in 2020, but also more likely than active voters to vote third party.'
        },
        {
            text: 'Believe special interest groups influence elections',
            value: true,
            answer: 'Non-voters are less concerned about special interest groups influencing elections than active voters.'
        }
    ]

        return (
            <div id="landingQuizWrap">
                <h2>Which of the following do you believe is more true of non-voters than active voters who consistently turn out on election day?</h2>
                <ul>
            {quizOptions.map((option, index) => {
                return this.state.revealAnswer === index
                    ? <li className={option.value ? "right" : "wrong"} key={option.text}>
                        <div className="question">
                            <div className="checkbox active"></div> {option.text}
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