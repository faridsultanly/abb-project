import React, { Component } from 'react'
import SidebarHome from '../../icons/SidebarHome'
import AngleButtom from '../../icons/AngleButtom'
import { Link } from 'react-router-dom';

export class MultiNavLink extends Component {
    state={
        drop: false
    }
  render() {
    const {drop} = this.state;
    const {data} = this.props;
    return (
        <li>
            <div onClick={()=>this.setState({drop: !drop})} className="nav_multi">
                <a href="#" className="nav-link">
                    <span className="nav_svg_container">
                        {data?.svg}
                    </span>
                    <span className="nav_text">{data?.title}</span>
                </a>
                <AngleButtom />
            </div>
            {
                drop?
                <ul className="sub_nav_link">
                    {
                        data?.sub.map((item, i)=>{
                            return(
                                <li key={i}>
                                    <Link to={item?.path}>{item?.title}</Link>
                                </li>
                            )
                        })
                    }
                    
                </ul>:null
            }
        </li>
    )
  }
}

export default MultiNavLink