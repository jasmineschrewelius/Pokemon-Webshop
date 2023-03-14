import { useState } from 'react';
import PopUp from '../PopUp/PopUp';
import Shoppingcart from '../Shoppingcart/Shoppingcart';
import './Product.css';


function ProductResult(props) {



  const [CartProducts, setCartProducts] = useState([]);

  


  const addToCart = (image, name, price, qty) => {   // add to cart
    const newProd = [...CartProducts]
    
    const newCart = newProd.find((product) => product.name == name);
   
    if(newCart ) {
      newCart.qty++;
      
    } else { ;
     newProd.push({image, name, qty, price})
    } 
    setCartProducts(newProd); 

  }

  
  

  const onRemove = (product) => {    // remove product tru trashbin icon
    setCartProducts((oldState) => {
        const ProdIndex = oldState.findIndex((item) => item.id === product.id);
        if (ProdIndex !== -1) {
            oldState.splice(ProdIndex, 1)
        }
        return [...oldState];

    })


  }
    
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
                     
                     <button onClick={() => addToCart(product.image, product.name, product.price, product.qty)} >Add To Cart</button>
                     </li>
                )

            })}


         </ul>
        
         <div className='Shoppingcart'>
        < Shoppingcart   products={CartProducts}  onRemove={onRemove}/>


     </div>
        
         </div>
    )
}

export default ProductResult;