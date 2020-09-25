import React, { Component } from 'react'
import Car from './components/Car'
import './App.scss'

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
    showCars: false,
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({ cars })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({ cars })
  }

  render() {
    const cars = this.state.cars

    return (
      <div className='App container mx-auto px-4'>
        <h1 className='text-4xl'>{this.state.pageTitle}</h1>
        <div className='mb-20'>
          <button
            className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
            onClick={this.toggleCarsHandler}
          >
            Toggle cars
          </button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
          {this.state.showCars &&
            cars.map((car, index) => {
              return (
                <Car
                  key={index}
                  name={car.name}
                  years={car.years}
                  onChangeName={(ev) =>
                    this.onChangeName(ev.target.value, index)
                  }
                  onDelete={this.deleteHandler.bind(this, index)}
                />
              )
            })}
        </div>
      </div>
    )
  }
}

export default App
