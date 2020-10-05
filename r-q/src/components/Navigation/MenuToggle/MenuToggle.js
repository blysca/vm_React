import React from 'react'
import classes from './MenuToggle.module.css'

const MenuToggle = (props) => {
  const cls = [
    classes.MenuToggle,
    'h-6 w-6 text-gray-500',
    props.isOpen ? classes.open : ''
  ]
  return (
    <svg
      onClick={props.onToggle}
      className={cls.join(' ')}
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      { 
        props.isOpen ? ( 
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : ( 
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )    
      }
    </svg>
  )
}
export default MenuToggle