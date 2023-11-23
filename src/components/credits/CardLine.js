import React, { Component } from 'react'

export class CardLine extends Component {
  render() {
    const {title, subTitle} = this.props
    return (
        <div className="support_card">
            <span>{title}</span>
            <span>{subTitle}</span>
        </div>
    )
  }
}

export default CardLine