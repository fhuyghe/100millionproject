import React from 'react'
import {Link} from 'react-router-dom'

const Button = (props) => {
    let classes = "button " + props.color
    return <div class={classes} onClick={props.onClick}>
        <Link to={props.to}>{props.children}</Link>
        <div className="shadow"></div>
    </div>
}

export default Button