import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/sideBarSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

  const [searchParam, setSearchParam] = useSearchParams();
  console.log(searchParam.get("v"));

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeSideBar())
  }, []);


  return (
    <div className='px-2 mt-2'>
      <iframe width="800" 
      height="400" 
      src={"https://www.youtube.com/embed/" +searchParam.get("v") + "?si=sDtyfyVLLKRUY2u-&autoplay=1"}
      title="YouTube video player"
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
      </iframe>
    </div>
  )
}

export default WatchPage