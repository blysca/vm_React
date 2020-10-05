import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinisthedQuiz from '../../components/FinisthedQuiz/FinisthedQuiz'

class Quiz extends Component {
  state = {
    results: {
      //
    },
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        id: 1,
        question: 'On Cloud Nine',
        rightAnswerId: 3,
        answers: [
          {
            text: 'Meaning: Giving up; to surrender.',
            id: 1,
          },
          {
            text:
              'Meaning: To not work alone, but rather, together with others in order to achieve a certain goal.',
            id: 2,
          },
          {
            text:
              'Meaning: Having strong feelings of happiness or satisfaction. ',
            correct: true,
            id: 3,
          },
          {
            text: 'Meaning: To fall down ill or to die in large numbers.',
            id: 4,
          },
        ],
      },
      {
        id: 2,
        question: 'Needle In a Haystack',
        rightAnswerId: 2,
        answers: [
          {
            text:
              'Meaning: Someone who is beating around the bush is someone who avoids the main point.',
            id: 1,
          },
          {
            text:
              'Meaning: Something that is impossible or extremely difficult to find, especially because the area you have to search is too large.',
            correct: true,
            id: 2,
          },
          {
            text:
              'Meaning: A boxing term. Also often used to refer to inappropriate words, or comments that are too personal.',
            id: 3,
          },
          {
            text:
              'Meaning: Usually this references a tool used by rescuers when they pry or cut open a car to save the occupant.',
            id: 4,
          },
        ],
      },
    ],
  }

  retryHandler = () => {
    this.setState({
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
      results: {}
    })
  }

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: { [answerId]: 'success' },
        results
      })
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('finished')
          this.setState({
            isFinished: true,
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          })
        }
        window.clearTimeout(timeout)
      }, 1500)
    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: { [answerId]: 'error' },
        results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  componentDidMount() {
    console.log('QUIZ ID: ', this.props.match.params.id);
  }

  render() {
    return (
      <div className={classes.Quiz + ''}>
        <div className={classes.QuizWrapper}>
          {!this.state.isFinished && (
            <h1 className='text-4xl px-4 py-2'>Please, answer the question</h1>
          )}

          {this.state.isFinished ? (
            <FinisthedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
             />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Quiz
