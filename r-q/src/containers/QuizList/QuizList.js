import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './QuizList.module.css'

export default class QuizList extends Component {
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink
            className="block px-4 py-3 hover:bg-teal-700 bg-gray-100 text-blue-700 hover:text-white transition duration-200 ease-in-out"
           to={'/quiz/' + quiz}>to {quiz}</NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div className="container mx-auto max-w-2xl py-20">
          <h1 className="text-4xl mb-8">Quizes List</h1>
          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    )
  }
}
