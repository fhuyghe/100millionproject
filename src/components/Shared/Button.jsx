import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

const Button = (props) => {
    let classes = "button " + props.color
    return <div className={classes} onClick={props.onClick}>
        {props.to
            ? <Link to={props.to}>{props.children}</Link>
            : <a href={props.url} target="_blank" rel="noopener noreferrer">{props.children}</a>
        }
        <div className="shadow"></div>
    </div>
}

export default Button