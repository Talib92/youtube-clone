import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleSideBar } from '../utils/sideBarSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // console.log(searchQuery);

  const dispatch = useDispatch();

  const HandleToggleSideBar = () =>{
    dispatch(toggleSideBar());
  }

  useEffect(()=>{

    const timer = setTimeout(()=> getSearchApiSuggestion(), 200)

    return()=>{
      clearTimeout(timer);
    }

  }, [searchQuery])

  const getSearchApiSuggestion = async() =>{

    console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1])
    // console.log(json[1])
  }

  return (
    <>
    <div className='grid grid-flow-col px-5 pt-5 shadow-sm fixed bg-white w-full  '>
        <div className='flex col-span-1 '>
            <img className='h-8 mr-2 cursor-pointer' onClick={HandleToggleSideBar} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" 
            alt="menu" /> 
          <img className='h-16 -mt-4 cursor-pointer' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
           alt="logo" />
           
        </div>

        <div className='ml-32 col-span-10'>
          <div>
            <input className='outline-none border h-10 border-gray-400  rounded-l-full pr-64 pl-4 py-2' type="text" placeholder='Search Youtube' 
            value={searchQuery} 

            onChange={(e)=> setSearchQuery(e.target.value)} 
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}/>

            <button className=' bg-gray-200 px-4 py-2 rounded-r-full'>Search</button>
          </div>
          {showSuggestions && <div className='fixed bg-white  px-2 rounded-lg w-[455px] shadow-lg mt-2 border border-gray-100'>
            <ul>
              {suggestions.map((suggestion)=> <li className='px-2 mt-1 py-1 hover:bg-gray-50 hover:rounded-lg'>{suggestion}</li>)}
              {/* <li className='px-2 mt-1 py-1 hover:bg-gray-50 hover:rounded-lg'>{searchQuery}</li> */}
            </ul>
          </div>}
        </div>

        <div className='col-span-1'>
            <img className='h-6' src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="user" />
        </div>
    </div>
    </>
  )
}

export default Header