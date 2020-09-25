import React, { Component } from 'react'
import Radium from 'radium'
import classes from './Car.module.scss'

class Car extends Component {
  render() {
    const inputClasses = [
      'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none',
    ]

    if (this.props.name) {
      inputClasses.push('border-blue-500')
    } else {
      inputClasses.push('border-red-500')
    }

    const style = {
      ':hover': {
        boxShadow:
          '0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06)',
      },
    }

    return (
      <div
        style={style}
        className='max-w-sm rounded overflow-hidden shadow-sm mb-20 my-8'
      >
        <div className={classes.car + ' px-6 py-4'}>
          <div className='font-bold text-xl mb-2'>Car name: {this.props.name}</div>
          <p className='text-gray-700 text-base'>{this.props.years}</p>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor={this.props.name}
            >
              New Name
            </label>
            <input
              onChange={this.props.onChangeName}
              className={inputClasses.join(' ')}
              id={this.props.name}
              type='text'
              placeholder='Enter new name'
              value={this.props.name}
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              onClick={this.props.onDelete}
              className='bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(Car)
