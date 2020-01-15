import React from 'react'
import { Link } from 'react-router-dom'

const Landing = ()=> {

    return (
        <div>
            <div>Landing page</div>
            <Link to='/story'>Dive In</Link>
            <Link to='/swingstates'>SwingStates</Link>
            <Link to='/study'>Study</Link>
        </div>
    )
}

export default Landing