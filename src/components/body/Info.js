import React, { Component } from 'react'
import Exclamation from '../../icons/Exclamation'
import Quit from '../../icons/Quit'

export class Info extends Component {
  render() {
    const {btn=true, title='Bank tərəfindən Kredit üzrə müraciətinizə baxılmışdır və müsbət rəy verilmişdir. Mürəciətinizi tamamlamağınız xahiş olunur'}= this.props
    return (
        <div className="info">
            <div className="info_text">
                <Exclamation />
                <span>{title}</span>
            </div>
            {btn? <Quit  />:null}
            
        </div>
    )
  }
}

export default Info