import React, { Component } from 'react'
import InfiHead from '../components/info/InfiHead'
import PreferenceSection from '../components/info/PreferenceSection'
import OnlineApplySection from '../components/info/OnlineApplySection'
import CreditsConditionsSection from '../components/info/CreditsConditionsSection'
import Footer from '../components/info/Footer'

export class CreditsInfo extends Component {
  render() {
    return (
        <div className="main-body">
        <InfiHead />
        <PreferenceSection />
        <OnlineApplySection />
        <CreditsConditionsSection />
        <Footer />
        
    </div>
    )
  }
}

export default CreditsInfo