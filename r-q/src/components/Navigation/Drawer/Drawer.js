import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const links = [
  {
    to: '/',
    label: 'List',
    exact: true,
  },
  {
    to: '/Auth',
    label: 'Authorization',
    exact: false,
  },
  {
    to: '/quiz-creator',
    label: 'Create Quiz',
    exact: false,
  },
]



class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose()
  }

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index} className='-m-3'>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeStyle={{opacity: '0.75'}}
             className='text-gray-900 space-y-1 p-3 block hover:bg-gray-200 transition ease-in-out duration-150'
             onClick={this.clickHandler}
          >
            <p className='text-base leading-6 font-medium'>{link.label}</p>
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const cls = [classes.Drawer]

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen && <Backdrop onClick={this.props.onClose} />}
      </React.Fragment>
    )
  }
}

export default withRouter(Drawer)
