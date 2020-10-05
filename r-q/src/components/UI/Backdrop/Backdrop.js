import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop = (props) => {
  return (
    <div
      className={classes.Backdrop + ' bg-indigo-800 bg-opacity-75'}
      onClick={props.onClick}
    />
  )
}

export default Backdrop