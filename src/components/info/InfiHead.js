import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class InfiHead extends Component {
  render() {
    return (
        <div>
        <div className="header_cover">
            <Link to="/">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="6" fill="#E1E1EB"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2071 15.7929C16.8166 15.4024 16.1834 15.4024 15.7929 15.7929C15.4024 16.1834 15.4024 16.8166 15.7929 17.2071L18.5863 20.0005L15.7929 22.794C15.4024 23.1845 15.4024 23.8177 15.7929 24.2082C16.1834 24.5987 16.8166 24.5987 17.2071 24.2082L20.0005 21.4148L22.794 24.2082C23.1845 24.5987 23.8177 24.5987 24.2082 24.2082C24.5987 23.8177 24.5987 23.1845 24.2082 22.794L21.4148 20.0005L24.2082 17.2071C24.5987 16.8166 24.5987 16.1834 24.2082 15.7929C23.8177 15.4024 23.1845 15.4024 22.794 15.7929L20.0005 18.5863L17.2071 15.7929Z" fill="#0D0D19"/>
                </svg>
            </Link>
            
            <div className="main-container">
                <div className="header_text">
                    <h2>Tərəfdaşlara Anında Dəstək kreditini <br/>
                    <span>2 iş günü</span> ərzində onlayn əldə et!</h2>
                    <p>ABB müştərilərə yerli və ya xarici valyutada qısa müddətli tələblərin ödənilməsi məqsədilə təminatsız kreditlər təklif edir. Kredit şərtləri müştərilərin bankda olan hesab dövriyyələrinə əsasən müəyyən edilir.</p>

                    <button className="apply_btn header_btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00016 3.33334V12.6667M8.00016 12.6667L12.6668 8.00001M8.00016 12.6667L3.3335 8.00001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>
                            Kredit kalkulyatoru 
                        </span>
                    </button>

                    <div className="header_text_info">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9H12.01C12.5623 9 13.01 8.55228 13.01 8C13.01 7.44772 12.5623 7 12.01 7H12ZM13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12Z" fill="#3B8DD4"/>
                        </svg>

                        <span>Yekun aylıq ödəniş bankın təklifinə uyğun olaraq formalaşacaqdır.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default InfiHead