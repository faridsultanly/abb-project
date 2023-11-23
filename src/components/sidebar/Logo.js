import React, { Component } from 'react'
import logo from "../../images/logo.png"
export class Logo extends Component {
  render() {
    return (
        <div className="logo">
            <img title="logo" src={logo} />
        </div>
    )
  }
}

export default Logo