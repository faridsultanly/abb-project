import React, { Component } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
import Info from './Info'
import ApplyBtn from '../button/ApplyBtn'
import TableFooter from './TableFooter'
import SectionBtn from './SectionBtn'
import axios from 'axios'

export class MainContainer extends Component {
  state={
    creditsData: {
      count:'',
      data:[],
      page:'',
      total_page:''
    }
  }
  getData(page){
    axios.get('./table.json')
    .then(resp=>{
      
      const data = resp?.data.find(item=>item?.page == page)
      this.setState({creditsData: data})
    })
  }
  componentDidMount(){
    this.getData(1)
  }

  changePageBtn=(page)=>{
    this.getData(page)
  }
  render() {

    const {creditsData} = this.state;
    console.log(creditsData)
    return (
        <div className="inner_container">
        <div className="section_header">
            <h2>Kreditlər</h2>
            <ApplyBtn />
        </div>
        <SectionBtn />
        <Info />
        <div className="main-table">
            <table>
               <TableHead />
               <tbody>
                {
                  creditsData?.data.map((item, i)=>{
                    return(
                      <TableBody 
                        key={i}
                        params={item}
                      />
                    )
                  })
                }
               </tbody>
            </table>
            <TableFooter changePage={this.changePageBtn} data={creditsData} />
        </div>
    </div>
    )
  }
}

export default MainContainer