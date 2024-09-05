import React from 'react'

const Comment = ({commentData}) => {
// console.log(commentData)

const authorDisplayName = commentData?.snippet?.topLevelComment?.snippet?.authorDisplayName;
const textOriginal = commentData?.snippet?.topLevelComment?.snippet?.textOriginal;
const authorProfileImageUrl = commentData?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl;

if (!authorDisplayName || !textOriginal || !authorProfileImageUrl) {
    return null; 
  }

  return (
    <div className='flex mt-4'>
        <img className='rounded-full mr-4 mb-4' src={authorProfileImageUrl} alt="user" />
            <div>
                <p className='font-semibold'>{authorDisplayName}</p>
                <p className=''>{textOriginal}</p>
            </div>
    </div>
  )
}

export default Comment;