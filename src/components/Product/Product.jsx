import './Product.css';


function ProductResult(props) {






    // visa produkt namn, bild, pris, köpa knapp, länk till mer info
    return (
        <div className="ProductResult">

     <h3>Search Result</h3>

         <ul>

            {props.product.map((product,index) => {
                return (
                    <li className="Product" key={index}> 
                     
                     <img src={product.image} alt="" width={70}/> 

                     {product.name} 

                     <p>More info</p>
                     
                     {product.price} 
                     
                     <button>Add To Cart</button>
                     </li>
                )

            })}


         </ul>
        
        
         </div>
    )
}

export default ProductResult;