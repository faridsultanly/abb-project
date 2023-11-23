import React, { Component } from 'react'
import SingleNavLink from './SingleNavLink'
import MultiNavLink from './MultiNavLink'
import { links } from './links'

export class Nav extends Component {
  render() {
    return (
        <nav>
            <ul>
              {
                links.map((item, i)=>{
                  if(item?.sub.length === 0){
                    return(
                      <SingleNavLink key={i} data={item} />
                    )
                  }else{
                    return(
                      <MultiNavLink key={i} data={item} />
                    )
                  }
                })
              }
            </ul>
        </nav>
    )
  }
}

export default Nav