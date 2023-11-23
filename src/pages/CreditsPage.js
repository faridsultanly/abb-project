import React, { Component } from 'react'
import SideBar from '../components/sidebar/SideBar'
import Header from '../components/header/Header'
import CreditsContainer from '../components/credits/CreditsContainer'

export class CreditsPage extends Component {
  render() {
    return (
        <>
        <SideBar />
        <div className='container'>
          <Header />
          <CreditsContainer />
        </div>
        </>
    )
  }
}

export default CreditsPage