import React, { Component } from 'react'
import Moon from '../../icons/Moon';

export class DarkMode extends Component {
  state={
    colors:[
     {
      color: '--dark-nav',
      darkValue: "#232324",
      lightValue: "#2058BB"
     },
     {
      color: '--dark-white',
      darkValue: "#232324",
      lightValue: "#fff"
     },
     {
      color: '--dark-body',
      darkValue: "#000",
      lightValue: "rgb(250, 250, 250)"
     },
     {
      color: '--dark-black',
      darkValue: "#fff",
      lightValue: "#000"
     },
     {
      color: '--dark-gray',
      darkValue: "#ffffff12",
      lightValue: "rgba(0, 0, 0, 0.12)"
     },
     {
      color: '--dark-gray-2',
      darkValue: "#282829",
      lightValue: "#EBEBF2"
     },
    ],
    mode: localStorage.getItem("webDarLightMode")?Boolean(localStorage.getItem("webDarLightMode")): false
  }
  changeWebMode(mode){
    
    this.setState({mode:mode});
    this.state.colors.map((data, i)=>{
      document.documentElement.style.setProperty(data?.color, mode? data?.darkValue: data?.lightValue);
    });
    if(mode){
       localStorage.setItem("webDarLightMode", mode)
    }else{
      localStorage.removeItem("webDarLightMode")

    }
  
  }

  componentDidMount(){
    this.changeWebMode(this.state.mode);
  }
  render() {
    const {mode} = this.state
    return (
        <div onClick={this.changeWebMode.bind(this, !mode)} className="header_icon_container">
            <Moon />
        </div>
    )
  }
}

export default DarkMode