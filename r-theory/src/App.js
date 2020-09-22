import React, { Component } from 'react'
import Car from './components/Car'
import './App.css'

class App extends Component {
  state = {
    cars: [
      {
        name: 'ford',
        years: 2020,
      },
      {
        name: 'audi',
        years: 2010,
      },
      {
        name: 'mazda',
        years: 2012,
      },
    ],
    pageTitle: 'react components',
  }

  changeTitleHandler = (newTitle) => {
    console.log('changeTitleHandler: ', newTitle)
    
    this.setState({
      pageTitle: newTitle,
    })
  }

  handleInput = (ev) => {
     this.setState({
      pageTitle: ev.target.value
    })
  }

  render() {
    const cars = this.state.cars

    return (
      <div className='App container mx-auto px-4'>
        <h1 className='text-4xl'>{this.state.pageTitle}</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="username" 
           type="text"
           placeholder="Username"
           onChange={this.handleInput}
           />
        </div>
        <div className='mb-20'>
          <button
            className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
            onClick={this.changeTitleHandler.bind(this, 'Changed!')}
          >
            Change title
          </button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
          {cars.map((car, index) => {
            return <Car 
            key={index}
            name={car.name}
            years={car.years} 
            onChangeTitle={this.changeTitleHandler.bind(this, car.name+ ' Clicked!')}
            />
          })}
        </div>
      </div>
    )
  }
}

export default App
