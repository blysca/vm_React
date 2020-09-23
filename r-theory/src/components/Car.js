import React from 'react'
import './Car.css'

export default (props) => {
  return (
  <div className="max-w-sm rounded overflow-hidden shadow-lg mb-20 my-8">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{props.name}</div>
      <p className="text-gray-700 text-base">{props.years}</p>
      <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.name}>
        New Name
      </label>
      <input 
        onChange={props.onChangeName}
        className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        id={props.name}
        type="text"
        placeholder="Enter new name" 
        value={props.name}
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        onClick={props.onDelete}
        className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        >Delete</button>     
    </div>
    </div>
  </div>
  )
}