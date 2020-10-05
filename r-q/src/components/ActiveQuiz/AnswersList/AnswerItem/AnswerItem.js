import React from 'react'
import classes from './AnswerItem.module.css'

const AnswerItem = (props) => {
  let cssClasses = [
    classes.AnswerItem,
    'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded block mb-2 transition duration-300 ease-in-out cursor-pointer'
  ]

  if (props.state) {
    cssClasses = [...cssClasses, classes[props.state] ]
  }
  return (
    <span 
    className={cssClasses.join(' ')}
    onClick={() => props.onAnswerClick(props.answer.id)}
    >{props.answer.text}</span>
  )
}

export default AnswerItem  