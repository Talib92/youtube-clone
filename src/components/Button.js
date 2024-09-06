import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className= 'bg-gray-100 px-6 py-1 mt-6 rounded-md font-semibold active:bg-black active:text-white mr-2'>{name}</button>
    </div>
  )
}

export default Button