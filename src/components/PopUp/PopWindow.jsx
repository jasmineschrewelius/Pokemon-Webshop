import React from "react";


const PopWindow = ({open, onClose, prod, img, info}) => {     // function that accepts open,onClose,prod,img,info

    if(!open) return null           // if open is not  true, return nothing

    return (

        <div className="Overlay">
            <div className="Modul-container"> {/*create the Pop Up window*/}
                <img src={img} alt="" />

                <div className="Modul-info">
                
                <h1>{prod}</h1>
                <p>Element: {info}</p>

                <button className="Close-button" onClick={onClose}>Close</button> {/*create button that close when clicked */}
                


                </div>
            </div>

      

        </div>
    )
}

export default PopWindow;