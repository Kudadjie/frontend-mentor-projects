import React, {useState} from "react";
import RateUsView from "./components/RateUs/RateUs";
import ThanksView from "./components/Thanks/Thanks";
import "./GeneralUI.css"



function App(){

  let view;
  const [firstLoad, setfirstLoad] = useState({value:true, option: ""})

  if(firstLoad.value === true){view = (<RateUsView onSendData={setfirstLoad}/>)}
  if(firstLoad.value === false){view = (<ThanksView score={firstLoad.option}/>)}

  return (
    view
  )
}

export default App;