import React from "react";
import "./App.css";
import image from "../images/image-qr-code.png"

function App(){

  return (
    <div className="card">
      <div>
        <img src={image} width="300px"/>
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>

    </div>
  )
}

export default App;