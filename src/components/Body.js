import React from 'react'
import SideBar from './SideBar'
// import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
        <SideBar/>
        {/* <MainContainer/> */}
        <Outlet/> 
        {/* //in order to render watchpage and main container dynamically useing routes  */}
    </div>
  )
}

export default Body