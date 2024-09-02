import React from 'react'

const Header = () => {
  return (
    <>
    <div className='grid grid-flow-col px-5 pt-5 shadow-lg '>
        <div className='flex col-span-1 '>
            <img className='h-8 mr-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" alt="menu" />
            <img className='h-16 -mt-4' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="logo" />
        </div>
        <div className='ml-32 col-span-10'>
            <input className='outline-none border h-10 border-gray-400  rounded-l-full pr-64 pl-4 py-2' type="text" placeholder='Search Youtube' />
            <button className=' bg-gray-300 px-4 py-2 rounded-r-full'>Search</button>
        </div>
        <div className='col-span-1'>
            <img className='h-6' src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="user" />
        </div>
    </div>
    </>
  )
}

export default Header