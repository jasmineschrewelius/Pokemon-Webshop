import React from "react";


const PopWindow = ({open, onClose, prod, img, info}) => {     // accepts the state open

    if(!open) return null           // if open is not  true, return nothing

    return (

        <div className="Overlay">
            <div className="Modul-container">
                <img src={img} alt="" />

                <div className="Modul-info">
                
                <h1>{prod}</h1>
                <p>Element: {info}</p>

                <button className="Close-button" onClick={onClose}>Close</button>
                


                </div>
            </div>

      

        </div>
    )
}

export default PopWindow;