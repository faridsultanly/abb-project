import React, { Component } from 'react'
import CreditsInfo from './CreditsInfo'
import CreditsSupport from './CreditsSupport'

export class CreditsContainer extends Component {
  render() {
    return (
      <div className="inner_container">
            <CreditsInfo />
            
            <CreditsSupport 
                cardhead='Tərəfdaşlara Anında Dəstək krediti'
                cardinfo='Kredit xətti Bank və müştəri tərəfindən öncədən müqavilə ilə razılaşdırılmış şərtlərlə istifadə edilir'
                percentage='13%'
                commission='0 AZN'
                amount='350.000 AZN-ə dək'
                month='12 ayadək'
            />
            <CreditsSupport 
                cardhead='Kredit Xəttindən istifadə'
                cardinfo='Kredit şərtləri müştərilərin bankda olan hesab dövriyyələrinə əsasən müəyyən edilir'
                percentage='11%-dən başlayaraq'
                commission='15 AZN'
                amount='300.000 AZN-ə dək'
                month='24 ayadək'
            />
            <CreditsSupport 
                cardhead='Təcili kredit'
                cardinfo='Kredit şərtləri müştərilərin bankda olan hesab dövriyyələrinə əsasən müəyyən edilir'
                percentage='11%-dən başlayaraq'
                commission='15 AZN'
                amount='300.000 AZN-ə dək'
                month='24 ayadək'
            />
           
        </div>
    )
  }
}

export default CreditsContainer