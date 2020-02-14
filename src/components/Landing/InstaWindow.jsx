import React from 'react'
import './InstaWindow.scss'

const InstaWindow = (props) => { 
    return (
        <div className="insta-window">
            <div className="insta-image" style={{
                backgroundImage: "url('" + props.image + "')"
            }}></div>
            <div className="insta-footer">
            <i className="fal fa-comment"></i>
            <i className="fal fa-paper-plane"></i>
                <i className="fal fa-heart"></i>
            </div>
        </div>
    )
}

export default InstaWindow