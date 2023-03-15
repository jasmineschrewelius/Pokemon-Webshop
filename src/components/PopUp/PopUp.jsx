import React, { useState } from "react";
import "./PopUp.css";
import PopWindow from "./PopWindow";

export default function PopUp(props) {  // fucntion that accepts props


    const [openWindow, setOpenWindow] = useState(false);   // set the initial state to false using UseState

 
    return (
     <div>
      
      <button className="Open-button" onClick={() => setOpenWindow(true)}>More Info</button>      {/*create button and set the state for true when user clicks on button */}

      <PopWindow open={openWindow} onClose={() => setOpenWindow(false)} prod={props.name} img={props.image} info={props.information}/> {/*send important data to PopWindow */}
     </div>

    );
}