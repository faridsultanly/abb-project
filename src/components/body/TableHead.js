import React, { Component } from 'react'

export class TableHead extends Component {
  render() {
    return (
        <thead>
            <tr>
                <th> TARİX </th>
                <th> MÜQAVİLƏ NÖMRƏSİ </th>
                <th> STATUS </th>
                <th> TİP </th>
            </tr>
    </thead>
    )
  }
}

export default TableHead