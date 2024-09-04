import React from 'react'

const commentsData = [
    {
        name:"Talib",
        text:"My comment is here",
        replies: [ {
            name:"Talib",
            text:"My comment is here",
            replies: [ {
                name:"Talib",
                text:"My comment is here",
                replies: [ {
                    name:"Talib",
                    text:"My comment is here",
                    replies: []
                },]
            },]
        },]
    },
    {
        name:"Talib",
        text:"My comment is here",
        replies: []
    },
    {
        name:"Talib",
        text:"My comment is here",
        replies: []
    },
    {
        name:"Talib",
        text:"My comment is here",
        replies: []
    },
    {
        name:"Talib",
        text:"My comment is here",
        replies: []
    },
];

const Comment = ({data}) =>{
    const {name, text, replies} = data;
    return (
        <div className='mt-2 flex bg-gray-100 p-4 shadow-sm mb-2 rounded-md'>
            <img className='w-6 h-6'
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="user" />
            <div className='ml-2'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({comments}) =>{
    return(
        comments.map((comment, index) => 
        <div  key={index}>
            <Comment data = {comment} />
            <div className='pl-6'>
            <CommentsList comments = {comment.replies}/>       
            </div> 
        </div>
        )
    )
}


const CommentsContainer = () => {
  return (
    <div className='mt-2 px-2'>
        <h1 className='font-bold text-xl'>Comments:</h1>
            <CommentsList comments = {commentsData}/>
             {/* <Comment data = {commentsData[0]}/> */}
    </div>
  )
}

export default CommentsContainer