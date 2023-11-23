import React, { Component } from 'react'

export class TableBody extends Component {
  render() {
    const {params} = this.props;
    return (
        <tr>
            <td>{params?.date}</td>
            <td>{params?.contract_number}</td>
            {
              params?.status == 1?
              <td><span className="accepted">TƏSDİQLƏNMİŞ</span></td>:
              params?.status == 2?
              <td><span className="accepted">İMTİNA (BANK)</span></td>:
              params?.status == 3?
              <td><span className="accepted">İCRADADIR</span></td>:
              params?.status == 4?
              <td><span className="accepted">SEND TO BANK</span></td>:
              params?.status == 5?
              <td><span className="accepted">PENDING BANK</span></td>:null
            }
            
            <td>{params?.type}</td>
        </tr>
    )
  }
}

export default TableBody