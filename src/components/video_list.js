import React from 'react';
import VideoListItem from "./video_list_item";
const VideoList=(props)=>{
    const onVideoSelect=props.onVideoSelect;
    const videoItems=props.videos.map((video)=>{ 
        return (<VideoListItem 
            onVideoSelect={onVideoSelect}
            key ={video.etag}
            video={video} />)
    })
    return(
        <div className="">
        <ul className="list-group">
        {videoItems}
        </ul>
        </div>
    )
}
export default VideoList;