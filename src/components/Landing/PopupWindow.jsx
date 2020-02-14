import React from 'react'
import './PopupWindow.scss'

const PopupWindow = (props) => { 
    return (
        <div id={props.id} className="popup-window">
            <div className="popup-header"><i className="far fa-times"></i></div>
            <div className="popup-text">{props.text}</div>
        </div>
    )
}

export default PopupWindow