import React from 'react'
import './Videos.scss'

const Videos = () => {

    const videos = [
        {
            title: "West Virginia",
            description: "A video in West Virginia",
            vimeoID: "1234"
        },
        {
            title: "Arizona",
            description: "A video in West Virginia",
            vimeoID: "1234"
        },
        {
            title: "New York City",
            description: "A video in West Virginia",
            vimeoID: "1234"
        },
        {
            title: "Explainer video",
            description: "A video in West Virginia",
            vimeoID: "1234"
        }
    ]

    return <main id="videoPage">
        <div className="wrap">
            <h1>Videos</h1>
            <h5>Introduction</h5>
            <div className="videos-wrap">
            {videos.map((video) => { 
                return <div className="video">
                    <div className="video-thumbnail">Image</div>
                    <h3>{ video.title }</h3>
                    <p>{ video.description }</p>
                </div>
            })}
            </div>
        </div>
    </main>

}

export default Videos