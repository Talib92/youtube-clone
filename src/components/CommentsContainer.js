import React, { useEffect, useState } from 'react'
import Comment from './Comment';
import { YOUTUBE_API_KEY, YOUTUBE_COMMENT_API } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';


const CommentsContainer = () => {

    const [id] = useSearchParams()

    const [comments, setComments] = useState([]);

    const getComments = async () =>{

        const commentsData = await fetch( YOUTUBE_COMMENT_API +
            id.get("v") +
            "&key=" +
            YOUTUBE_API_KEY);
        const json = await commentsData.json();
        // console.log(json.items)
        setComments(json.items)
    };
    
    useEffect(() =>{
        getComments();
    },[]);

  return (
    <div className='mt-4 px-2 w-[800px] ml-4'>
        <h1 className='font-bold text-xl'>Comments:</h1>
        {comments.map((comment,index) => <Comment key={index} commentData={comment}/>)}
        {/* <Comment commentData={comments[0]}/> */}
    </div>
  )
};

export default CommentsContainer