import React from 'react'
import VideoBlock from './VideoBlock'
import './Videos.scss'

const Videos = () => {

    const videos = [
        {
            title: "West Virginia",
            description: "A video in West Virginia",
            vimeoID: "1234",
            name: "test-video"
        },
        {
            title: "Arizona",
            description: "A video in West Virginia",
            vimeoID: "1234",
            name: "test-video"
        },
        {
            title: "New York City",
            description: "A video in West Virginia",
            vimeoID: "1234",
            name: "test-video"
        },
        {
            title: "Explainer video",
            description: "A video in West Virginia",
            vimeoID: "1234",
            name: "test-video"
        }
    ]

    return <main id="videoPage">
        <div className="wrap">
            <div id="intro">
                <h1>Videos</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis sagittis tempus. Morbi mattis neque ac sapien fermentum, interdum convallis neque eleifend. Fusce eu libero in ipsum eleifend facilisis id in quam. Donec fringilla, leo in gravida lacinia, lacus leo pellentesque tortor, eget sodales tellus lorem eu dolor. </h5>
            </div>
            
            <div className="videos-wrap">
            {videos.map((video) => { 
                return <div className="video">
                    <div className="video-thumbnail">
                        <VideoBlock video={video.name} />
                        <div className="video-play"><i class="fas fa-play"></i></div>
                    </div>
                    <h3>{ video.title }</h3>
                    <p>{ video.description }</p>
                </div>
            })}
            </div>
        </div>
    </main>

}

export default Videos