import React, { Component } from 'react'
import img from "../../images/azerbaijan.png"
export class Lang extends Component {
  render() {
    return (
        <div className="header_icon_container">
            <span>AZ</span>
            <img src={img} alt=""/>
        </div>
    )
  }
}

export default Lang