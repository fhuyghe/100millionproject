import React from 'react'

const VideoBlock = (props) => { 
    let urlBase = "/videos/" + props.video
    return (
        <div className="video-block">
            <video autoplay={1} loop muted controls={0} poster={urlBase + "/thumbnail.jpg"}>
                <source type="video/mp4" src={urlBase + "/video.mp4"} />
                <source type="video/ogv" src={urlBase + "/video.ogv"} />
                <source type="video/webm" src={urlBase + "/video.webm"} />
            </video>
        </div>
    )
}

export default VideoBlock