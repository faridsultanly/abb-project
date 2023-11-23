import React, { Component } from 'react'
import Bell from '../../icons/Bell'

export class Notification extends Component {
  render() {
    return (
        <div className="header_icon_container">
           <Bell /> 
        </div>
    )
  }
}

export default Notification