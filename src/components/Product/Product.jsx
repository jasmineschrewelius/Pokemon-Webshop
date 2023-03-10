import PopUp from '../PopUp/PopUp';
import './Product.css';


function ProductResult(props) {




    
    return (
        <div className="ProductResult">

     <h3>Search Result</h3>

         <ul>
            


            {props.product.map((product,index) => {
                return (
                    <li className="Product" key={index}> 
                     
                     <img src={product.image} alt="" width={70}/> 

                     {product.name} 
                     
                    <PopUp name={product.name} image={product.image} information={product.info}/>
                     
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