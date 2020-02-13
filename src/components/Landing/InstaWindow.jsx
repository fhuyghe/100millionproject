import React from 'react'
import './InstaWindow.scss'

const InstaWindow = (props) => { 
    return (
        <div className="insta-window">
            <div class="insta-image" style={{
                backgroundImage: "url('" + props.image + "')"
            }}></div>
            <div class="insta-footer">
            <i class="fal fa-comment"></i>
            <i class="fal fa-paper-plane"></i>
                <i class="fal fa-heart"></i>
            </div>
        </div>
    )
}

export default InstaWindow