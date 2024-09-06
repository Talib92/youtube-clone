import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../utils/sideBarSlice';
import ButtonLists from './ButtonLists';

const VideoContainer = () => {

  const dispatch = useDispatch();
  dispatch(closeSideBar())
  
  const[videos, setVideos] = useState([]);

  useEffect(()=> {
    getVideos();
  }, [])

  const getVideos = async () =>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items)
  }

  return (
    <>
    <ButtonLists/>
    <div className='flex flex-wrap ml-4 mt-2 '>

      {videos.map((video) =>

      <Link  key={video.id} to={"/watch?v=" + video.id}>

        <VideoCards videoData = {video}/> 

        </Link> )}
      {/* <VideoCards videoData = {videos[0]}/> */}
    </div>
    </>
  )
}

export default VideoContainer