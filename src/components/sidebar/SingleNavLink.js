import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class SingleNavLink extends Component {
  render() {
    const {data} = this.props;
    return (
        <li className="nav_multi">
            <Link to={data?.path} className="nav-link">
                <span className="nav_svg_container">
                    {data?.svg}
                </span>
                <span className="nav_text">{data?.title}</span>
            </Link>
            {
                data?.status === 1?
                 <span className="navbar_new_item">Yeni</span>:null
            }
           
        </li>
    )
  }
}

export default SingleNavLink