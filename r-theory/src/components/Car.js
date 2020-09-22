import React from 'react'
import './Car.css'

export default (props) => {
  return (
  <div className="max-w-sm rounded overflow-hidden shadow-lg mb-20">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{props.name}</div>
      <p className="text-gray-700 text-base">{props.years}</p>
      <button 
        onClick={props.onChangeTitle}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      type="button">click</button>
    </div>
  </div>
  )
}