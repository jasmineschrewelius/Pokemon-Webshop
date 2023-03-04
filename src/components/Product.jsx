import React from "react";



export const Product = (props) => {

    const { id, name, price } = props.data;

    const image1 = require('./image1.png');

    return (

       <div className="product">

      <img src={image1} width="100" />

      <div className="information">
        <p>
            {name}
        </p>
        <p>
            {price}:-
        </p>
      </div>

     <button className="CartButton">Add To Cart</button>

       </div>
    )
}