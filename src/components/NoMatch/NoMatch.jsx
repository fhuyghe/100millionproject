import React from 'react';
import Button from '../Shared/Button'
import './NoMatch.scss'

class NoMatch extends React.Component {

    render() { 
        return (
            <div id="nomatch-wrap">
                <div className="wrap">
                    <h1 className="number"><span>4</span><span>0</span><span>4</span></h1>
                    <p>The page you are looking for does not exist</p>
                    <p>You may have mistyped the address or the page may have moved.</p>
                    <Button to="/" color="white-border">Home Page</Button>
                </div>
            </div>
        )
    }
}

export default NoMatch;
