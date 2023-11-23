import React, { Component } from 'react'
import Lang from './Lang'
import DarkMode from './DarkMode'
import Notification from './Notification'
import UserInfo from './UserInfo'

export class Header extends Component {
  render() {
    return (
        <header>
            <Lang />
            <DarkMode />
            <Notification />
            <UserInfo />
        </header>
    )
  }
}

export default Header