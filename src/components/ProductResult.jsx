
function ProductResult(props) {






    // visa produkt namn, bild, pris, köpa knapp, länk till mer info
    return (
        <div className="ProductResult">

         <h3>Search Results</h3>

         <ul>

            {props.product.map((product,index) => {
                return (
                    <li key={index}> {product.name} </li>
                )

            })}


         </ul>
        
        
         </div>
    )
}

export default ProductResult;