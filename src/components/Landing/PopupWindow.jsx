import React from 'react'
import './PopupWindow.scss'

const PopupWindow = (props) => { 
    return (
        <div className="popup-window">
            <div class="popup-header"><i class="far fa-times"></i></div>
            <div class="popup-text">{props.text}</div>
        </div>
    )
}

export default PopupWindow