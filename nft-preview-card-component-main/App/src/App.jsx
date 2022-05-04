import React from "react";
import "./GeneralUI.css"
import heroimg from "./images/image-equilibrium.jpg"
import eye from "./images/icon-view.svg"
import crystal from "./images/icon-ethereum.svg"
import time from "./images/icon-clock.svg"
import profile from "./images/image-avatar.png"

function App(){

  return (
      <div className="card" >
      <div className="img-frame">
        <img src={heroimg} width="300" alt="equilibrium stack"/>
        <div className="eye-cover"></div>
        <img className="eye" src={eye}/>
      </div>
      <h1 ><a>Equilibrium #3429</a></h1>
      <p >Our Equilibrium collection promotes balance and calm.</p>
      <div className="details" >
        <div className="coin-value">
          <img src={crystal} alt="crypto"/>
          <span>0.041 ETH</span>
        </div>
        <div className="time-left" >
          <img src={time}/>
          <span>3 days left</span>
        </div>
      </div>
      <div className="divider"></div>
      <div className="profile-info" >
        <img src={profile} width="35" alt="user profile"/>
        <span>Creation of <a>Jules Wyvern</a></span>
      </div>
    </div>
    
  )
}

export default App;