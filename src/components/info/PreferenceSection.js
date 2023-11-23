import React, { Component } from 'react'
import frame2 from "../../images/Frame 2.png"
import frame3 from "../../images/Frame 3.png"
import frame4 from "../../images/Frame 4.png"
import frame5 from "../../images/Frame 5.png"
export class PreferenceSection extends Component {
  render() {
    return (
        <section className="main-section">
        <div className="main-container">
            <div className="advantage">
                <div className="advantage_header">
                    <h3 className="advantage_header-h3">Üstünlüklər</h3>
                    <span>Aşağıdakı üstünlüklərdən yararlanaraq Tərəfdaşlara Anında Dəstək kreditini sadə və rahat şəkildə əldə edə bilərsiniz</span>
                </div>
                <div className="advantage_container">
                    <div className="advantage_card">
                        <img src={frame2} />
                        <div className=" advantage_card_text" >
                            <h4>Girovsuz</h4>
                            <span className="card_text">Kredit müraciətinizin təhlili əsasında zaminlik tələb oluna bilər</span>
                        </div>
                    </div>
                    <div className="advantage_card">
                        <img src={frame3}/>
                        <div className=" advantage_card_text">
                            <h4>Hesab açmadan</h4>
                            <span className="card_text">ABB-də sahibkar və korporativ hesabı açmadan kredit üçün müraciət edə bilərsiniz</span>
                        </div>
                    </div>
                    <div className="advantage_card">
                        <img src={frame4}/>
                        <div className=" advantage_card_text">
                            <h4>2 iş günü ərzində</h4>
                            <span className="card_text">Vaxtınıza maksimum qənaət edərək qısa zaman ərzində kredit məbləğini əldə edin</span>
                        </div>
                    </div>
                    <div className="advantage_card">
                        <img src={frame5}/>
                        <div className=" advantage_card_text">
                            <h4>Onlayn</h4>
                            <span className="card_text">Banka yaxınlaşmadan kreditin sifarişi və  rəsmiləşdirilməsi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}

export default PreferenceSection