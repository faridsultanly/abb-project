import React, { Component } from 'react'
import ApplyBtn from '../button/ApplyBtn';
import Info from '../body/Info';

export class OnlineApplySection extends Component {
    state={
        amount:0,
        duration:0,
        btn:0
    }
  render() {
    const {amount, duration, btn} = this.state;
    return (
        <section className="main-section">
            <div className="main-container">
                <div className="online_apply">
                    <Info btn={false} title="Müraciət formasının doldurulması zamanı yaranan suallarla bağlı 937 nömrəsi ilə əlaqə saxlaya və ya sme_rm_ho@abb-bank.az ünvanına yaza bilərsiniz." />
                        <div className="online_apply_container">
                        <h3>Kredit üçün onlayn müraciət et</h3>
                        <div className="main-request">
                            <div className="apply_container">
                                <div className="credit_button">
                                    <div onClick={()=>this.setState({btn:0})} className={btn==0?"onclick_btn":"onclick"}>
                                        {/* <!-- onclick_btn --> */}
                                        <div className={btn==0?"circle_btn":"circle"}>
                                            {/* <!-- circle_btn  --> */}
                                            <div></div>
                                        </div>
                                        <div className="  onclick_info">
                                            <h4>Kredit</h4>
                                            <p>Kredit üzrə əsas borcun və faizlərin müntəzəm olaraq bərabər aylıq ödənilməsi</p>
                                        </div>
                                    </div>    
                                    <div onClick={()=>this.setState({btn:1})} className={btn==1?"onclick_btn":"onclick"}>
                                        <div className={btn==1?"circle_btn":"circle"}>
                                            <div></div>
                                        </div>
                                        <div className="onclick_info">
                                            <h4>Kredit</h4>
                                            <p>Kredit üzrə əsas borcun və faizlərin müntəzəm olaraq bərabər aylıq ödənilməsi</p>
                                        </div>
                                    </div>    
                                </div>
    
                                <div >
                                    <h3 className="range_head">Kredit məbləği</h3>
                                    <div className="range_container">
                                        <div className="range_count_container">
                                            <span>{amount}</span>
                                            <span>AZN</span>
                                        </div>
                                        <div className="range_inp">
                                            <input min="5000" max="350000" value={amount} onChange={(e)=>this.setState({amount:e.target.value})} type="range" />
                                        </div>
                                        <p className="min_max_range"> Min.: 5,000 - Max.: 350,000</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="range_head">Kredit müddəti</h3>
                                    <div className="range_container">
                                        <div className="range_count_container">
                                            <span>{duration}</span>
                                            <span style={{background:'none'}}></span>
                                        </div>
                                        <div className="range_inp">
                                            <input min="3" max="36" onChange={(e)=>this.setState({duration:e.target.value})} value={duration} type="range" />
                                        </div>
                                        <p className="min_max_range">  Min.: 3 ay - Max.: 36 ay</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="range_head">Kredit məbləğinin təyinatı</h3>
                                    <div className="range_block_gray">
                                        <span className="range_block_text">Qısamüddətli ehtiyyacların ödənilməsi</span>
                                    </div>
                                </div>
                            </div>
                            <div className="info_container">
                                <div className="info_container_block">
                                    <h5 className="block_head">Aylıq ödəniş <span>*</span></h5>
                                    <span className="block_number">1730.57 AZN</span>
                                </div>
                                <div className="info_container_block">
                                    <h5 className="block_head">İllik faiz dərəcəsi</h5>
                                    <span className="block_number">min. 12.0%</span>
                                </div>
                                <div className="comission">
                                    <h5 className="block_head">Komissiya</h5>
                                    <span className="block_number">max. 1% (15.00 AZN)</span>
                                    <span className="block_head comission_foot"> <span>*</span>Yekun aylıq ödəniş bankın təklifinə uyğun olaraq formalaşacaqdır. </span>
                                </div>
                                <ApplyBtn />
                            </div>
                            
    
                        </div>
                    </div>  
                </div>
            </div>
        </section>
    )
  }
}

export default OnlineApplySection