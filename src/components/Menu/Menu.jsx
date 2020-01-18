import React from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'

const Menu = ()=> {

    return (
        <div className="menu">
            <Link to='/story'>Dive In</Link>
            <Link to='/swingstates'>Swing States</Link>
            <Link to='/study'>Study</Link>
        </div>
    )
}

export default Menu