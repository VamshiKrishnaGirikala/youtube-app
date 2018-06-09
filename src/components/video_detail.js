import React from 'react';
const VideoDetail=(props)=>{
    console.log(props.video)
    if(!props.video){
        return(<div>Loading...</div>)
    }
    const video=props.video;
    console.log(video)
    const videoId=video.id.videoId;
    const url=`https://www.youtube.com/embed/${videoId}`;
return(
    <div className="video-detail ">
    <div className="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" title="video-detail" src={url}></iframe>
    </div>
    <div className="details">
    <div>{video.snippet.title}</div>
    <div>{video.snippet.description}</div>
    </div>
    
    </div>
)
}
export default VideoDetail;