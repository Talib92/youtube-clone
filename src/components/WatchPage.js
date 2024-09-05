import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/sideBarSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import VideoContainer from './VideoContainer';
import ButtonLists from './ButtonLists';

const WatchPage = () => {

  const [searchParam, setSearchParam] = useSearchParams();
  // console.log(searchParam.get("v"));

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(closeSideBar())
  }, []);


  return (
    <div className='flex flex-col mt-20 '>
      <div className='px-2 mt-2 flex  '>
        <iframe width="800" 
          height="400" 
          src={"https://www.youtube.com/embed/" +searchParam.get("v") + "?si=sDtyfyVLLKRUY2u-&autoplay=1"}
          title="YouTube video player"
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
        </iframe>
        <div className='w-8 -mt-10 h-8'>
          <div className='w-[12px]'>
              {/* <ButtonLists/> */}
              <VideoContainer/>
          </div>
        </div>
      </div>
        <CommentsContainer/>
    </div>
  )
}

export default WatchPage