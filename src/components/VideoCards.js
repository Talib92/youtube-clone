import React from 'react'

const VideoCards = ({videoData}) => {
    // console.log(videoData)
    const {snippet,statistics} = videoData;
    const {channelTitle, thumbnails, title} = snippet;
    const {commentCount,likeCount, viewCount} = statistics;

    const formatViews = (count) => {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(2) + 'M';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K';
        }
        return count;
    };


  return (
    <div className='mx-1 my-4 w-[295px] shadow-sm px-2 py-2 cursor-pointer hover:bg-blue-50 rounded-lg'>
        <img className='rounded-lg ' src={thumbnails?.medium?.url} alt="" />
        <ul>
            <li className='font-semibold'>{title}</li>
            <li className='text-gray-600'>{channelTitle}</li>
            <li className='text-gray-600'>{formatViews(viewCount)} views</li>
        </ul>
    </div>
  )
}

export default VideoCards;