import React, { Component } from 'react'
import MainPage from './pages/MainPage'
import CreditsPage from './pages/CreditsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreditsInfo from './pages/CreditsInfo'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/credits' element={<CreditsPage />} />
            <Route path='/credit-info' element={<CreditsInfo /> }/>
          </Routes>
      </main>
      </BrowserRouter>
      
    )
  }
}

export default App