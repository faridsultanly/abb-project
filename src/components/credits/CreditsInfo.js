import React, { Component } from 'react'
import photo from '../../images/Cash.png'

export class CreditsInfo extends Component {
  render() {
    return (
      <>
        <div className="section_header">
            <h2>Kreditlər</h2>
        </div>
        <img className="cash" src={photo} alt="" />
        <p className="information">Ehtiyacınıza uyğun Kiçik və Orta sahibkarlıq kreditləri</p>
      </>
    )
  }
}

export default CreditsInfo