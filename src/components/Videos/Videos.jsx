import React from 'react'
import VideoBlock from './VideoBlock'
import VideoPlayer from './VideoPlayer'
import './Videos.scss'
import {videos} from '../../Data/videoData'

const Videos = () => {
    return <main id="videoPage">
        <div className="wrap">
            <div id="intro">
                <h1>Videos</h1>
                <h5>Knight Foundation partnered with Show of Force to create short documentary films and supporting content that dives deeper into the stories of non-voters and the on-the-ground efforts to engage these Americans in democracy.</h5>
                <h5>Their stories are emotional, experiential, and bring viewers into the point-of-views of 'forgotten' non-voters. These voters also represent a diverse cross section of Americans——conservative and democratic, rich and poor, young and old, rural and urban.</h5>
            </div>
            
            <div className="videos-wrap">
            {videos.map((video) => { 
                return <div className="video" key={video.name}>
                    <div className="video-thumbnail">
                        <VideoPlayer url={video.url} title={video.title}>
                            <VideoBlock video={video.name} playSign={true}/>
                        </VideoPlayer>
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