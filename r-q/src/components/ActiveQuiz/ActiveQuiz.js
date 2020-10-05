import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = (props) => {
  return (
    <div className={classes.ActiveQuiz}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg border">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"><strong>{props.answerNumber}. </strong> {props.question}</div>
          <small>{props.answerNumber}/{props.quizLength}</small>
        </div>
        <AnswersList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        state={props.state}
         />
        
      </div>
    </div>
  )
}

export default ActiveQuiz

