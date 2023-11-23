import React, { Component } from 'react'
import Logo from './Logo'
import Nav from './Nav'

export class SideBar extends Component {
  render() {
    return (
        <div className="sidebar">
            <Logo />
            <Nav />
        </div>
    )
  }
}

export default SideBar