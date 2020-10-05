import React from 'react'
import classes from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = (props) => {
  return (
    <div className={classes.AnswersList + ' px-6 pt-4 pb-2'}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem 
          state={props.state ? props.state[answer.id] : null}
          key={index}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
          />
        )
      })}
    </div>
  )
}

export default AnswersList