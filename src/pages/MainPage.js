import React, { Component } from 'react'
import SideBar from '../components/sidebar/SideBar'
import Header from '../components/header/Header'
import MainContainer from '../components/body/MainContainer'

export class MainPage extends Component {
  render() {
    return (
      <>
      <SideBar />
      <div className='container'>
        <Header />
        <MainContainer />
      </div>
      </>
    )
  }
}

export default MainPage