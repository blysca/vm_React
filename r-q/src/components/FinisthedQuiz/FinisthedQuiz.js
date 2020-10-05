import React from 'react'
import { Link } from 'react-router-dom'

import classes from './FinisthedQuiz.module.css'
import Button from '../UI/Button/Button'

const FinisthedQuiz = (props) => {
  let cssClasses = [classes.AnswerItem, 'font-bold text-xl mb-2']

  if (props.state) {
    cssClasses = [...cssClasses, props.state]
  }

  const iconError = () => {
    return (
      <svg
        className='cursor-pointer ml-2 h-6 w-6 text-pink-700'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    )
  }

  const iconSuccess = () => {
    return (
      <svg
        className='cursor-pointer ml-2 h-6 w-6 text-green-700'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M5 13l4 4L19 7'
        />
      </svg>
    )
  }

  console.log('PROPS: ', props)

  const rightAnswers = Object.keys(props.results).reduce((acc, rec) => {
    if (props.results[rec] === 'success') {
      acc++
    }
    return acc
  }, 0)

  return (
    <div className='rounded overflow-hidden shadow-lg'>
      <div className='px-6 py-4'>
        <h1 className={cssClasses}>Finished</h1>
        <dl>
          {props.quiz.map((quizItem, index) => {
            console.log('quiz item: ', quizItem)
            return (
              <div
                key={index}
                className='bg-gray-50 py-2 flex flex-no-wrap items-center'
              >
                <dt className='text-sm leading-5 font-medium text-gray-500 flex-none w-8 text-center'>
                  {index + 1}.&nbsp;
                </dt>
                <dd className='mt-1 text-sm leading-5 text-gray-900 sm:mt-0 flex-auto flex items-center'>
                  {quizItem.question}
                  {props.results[quizItem.id] === 'error'
                    ? iconError()
                    : iconSuccess()}
                </dd>
              </div>
            )
          })}
        </dl>
        <div className='py-2'>
          <h3 className='text-md leading-5 font-medium text-gray-900'>
            Right: {rightAnswers}/{props.quiz.length}
          </h3>
        </div>
      </div>
      <div className='px-6 pb-4'>
        <Button onClick={props.onRetry}>Repeat</Button>
        <Link to='/'>
          <Button className='ml-4' type='button'>
            Go to the mail list
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default FinisthedQuiz
