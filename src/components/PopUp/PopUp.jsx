import React, { useState } from "react";
import "./PopUp.css";
import PopWindow from "./PopWindow";

export default function PopUp(props) {


    const [openWindow, setOpenWindow] = useState(false);   // define the state using UseState

 
    return (
     <div>
      
      <button className="Open-button" onClick={() => setOpenWindow(true)}>More Info</button>

      <PopWindow open={openWindow} onClose={() => setOpenWindow(false)} prod={props.name} img={props.image} info={props.information}/>
     </div>

    );
}