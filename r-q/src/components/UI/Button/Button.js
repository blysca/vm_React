import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
  const cls = [
    'font-semibold py-1 px-4 border rounded shadow',
    classes.Button,
    !props.type ? 'bg-white hover:bg-gray-100 text-gray-800 border-gray-400' : null,
    props.type === 'error' ? 'bg-pink-500 hover:bg-pink-700 text-white border-pink-700' : null,
    props.type === 'success' ? 'bg-teal-500 hover:bg-teal-700 text-white border-teal-700' : null,
    props.type === 'primary' ? 'bg-blue-500 hover:bg-blue-700 text-white border-blue-700' : null,
    props.disabled ? 'opacity-50 cursor-not-allowed' : null,
    props.cssClasses
  ]
  return (
    <button
      onClick={props.onClick}
      className={cls.join(' ')}
      disabled={props.disabled}
    >{props.children}</button>
  )
}

export default Button