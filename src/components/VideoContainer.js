import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const[videos, setVideos] = useState([]);

  useEffect(()=> {
    getVideos();
  }, [])

  const getVideos = async () =>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items)
  }

  return (
    <div className='flex flex-wrap ml-3 '>
      {videos.map((video) =>
      <Link to={"/watch?v=" + video.id}>
        <VideoCards key={video.id} videoData = {video}/> 
        </Link> )}
      {/* <VideoCards videoData = {videos[0]}/> */}
    </div>
  )
}

export default VideoContainer