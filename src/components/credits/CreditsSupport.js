import React, { Component } from 'react'
import ApplyBtn from '../button/ApplyBtn'
import CardLine from './CardLine'

export class CreditsSupport extends Component {
  render() {
    const{cardhead, cardinfo, percentage, commission, amount, month, } = this.props
    return (
      <div className="support">
        <div className="support_info">
            <h2>{cardhead}</h2>
            <p>{cardinfo}</p>
        </div>
        <div className="support_container">
            
            <CardLine title={percentage} subTitle="İllik faiz dərəcəsi" />
            <CardLine title={commission} subTitle="Komissiya haqqı" />
            <CardLine title={amount} subTitle="Kreditin məbləği" />
            <CardLine title={month} subTitle="Kreditin müddəti" />
           
        </div>
        <ApplyBtn />
      </div>
    )
  }
}

export default CreditsSupport