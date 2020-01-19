import React from 'react'
import { Link } from 'react-router-dom'
import './landing.scss'

const Landing = ()=> {

    return (
        <div className="landing-page">
            <div>Landing page</div>
            <Link to='/story'>Dive In</Link>
            <Link to='/swingstates'>Swing States</Link>
            <Link to='/study'>Study</Link>
        </div>
    )
}

export default Landing