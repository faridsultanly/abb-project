import React, { Component } from 'react'
import Info2 from '../../icons/Info2'
import Check from '../../icons/Check'

export class CreditsConditionsSection extends Component {
  render() {
    return (
        <section className="main-section">
        <div className="section_color">
            <div className="main-container">
                <div className="condition">
                    <h2 className="condition_head">Lazimi sənəd, tələb və kredit şərtləri</h2> 
                    <div className="condition_container">
                        <div className="condition_btn">
                            <button>Sənəd və tələblər</button>
                            <button>Kredit şərtləri</button>
                        </div>
                        <table className="condition_tbl">
                            <thead>
                                <tr>
                                    <th>
                                        TƏLƏB OLUNAN SƏNƏDLƏR
                                    </th>
                                    <th>
                                        TƏLƏBLƏR
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Check />
                                        Mənfəət Vergi Bəyənnaməsi (ƏDV ödəyicisi)
                                        <span className="tooltip_container">
                                            <Info2 />
                                            <span className="tooltip_card">Sonuncu dövr üçün</span>
                                        </span>
                                    </td>
                                    <td>
                                        <Check />
                                        ASAN İmza <a href="#">necə əldə etməli?</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Check />
                                        Digər bank çıxarışları
                                        <span className="tooltip_container">
                                            <Info2 />
                                            <span className="tooltip_card">Sonuncu dövr üçün</span>
                                        </span>
                                    </td>
                                    <td>
                                        <Check />
                                        Minimum 12 ay olmaqla ardıcıl və fasiləsiz fəaliyyət
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Check />
                                        Təsisçilərin zaminliyi (Hüquqi şəxslər üçün)
                                        <span className="tooltip_container">
                                            <Info2 />
                                            <span className="tooltip_card">Sonuncu dövr üçün</span>
                                        </span>
                                    </td>
                                    <td>
                                        <Check />
                                        Bank hesablarından mütəmadi istifadə
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       
                                    </td>
                                    <td>
                                        <Check />
                                        Müsbət kredit tarixçəsi
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>  
                </div>
            </div>
        </div>
    </section>
    )
  }
}

export default CreditsConditionsSection