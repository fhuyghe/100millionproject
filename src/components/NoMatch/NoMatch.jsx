import React from 'react';
import { Link } from 'react-router-dom'
import './NoMatch.scss'

class NoMatch extends React.Component {

    render() { 
        return (
            <div id="nomatch-wrap">
                <h1>Error 404</h1>
                <p>Go back to <Link to="/">the story</Link></p>
            </div>
        )
    }
}

export default NoMatch;
