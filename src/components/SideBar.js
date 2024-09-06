import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {

  const isSideBarOpen = useSelector((store)=> store.sideBar.isSideBarOpen);

  if(!isSideBarOpen) return null;

  return (
    <div className=' px-8 py-4 w-48 sticky h-full bg-white top-[69px] rounded-md '>
      <Link to={"/"}> <h1 className='font-bold'>Home</h1> </Link>
      <ul>
        <li>Shorts</li>
        <li>Videos</li>
      </ul>
      <h1 className='font-bold pt-4'>Subscriptions</h1>
      <ul>
        <li>Games</li>
        <li>Sports</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-4'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Most watched</li>
        <li>Live</li>
        <li>News</li>
      </ul>
      <h1 className='font-bold pt-4'>You</h1>
      <ul>
        <li>Watch later</li>
        <li>Liked videos</li>
        <li>Playlists</li>
        <li>Your videos</li>
      </ul>
    </div>
  )
}

export default SideBar