import React, { Component } from 'react'
import user from "../../images/Avatars.png"
import AngleRight from '../../icons/AngleRight'
export class UserInfo extends Component {
  render() {
    return (
        <div className="user_info">
            <div className="user_name">
                <span>İstifadəçi adı</span>
                <span>İstifadəçi ID-si</span>
            </div>
            <img src={user} alt=""/>
            <AngleRight />
        </div>
        )
  }
}

export default UserInfo