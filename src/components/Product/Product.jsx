import { useState } from 'react';
import PopUp from '../PopUp/PopUp';
import Shoppingcart from '../Shoppingcart/Shoppingcart';
import './Product.css';


function ProductResult(props) {  // function 



  const [CartProducts, setCartProducts] = useState([]); // set state using useState



  const addToCart = (image, name, price, qty) => {   // addToCart function taking in image,name, price, qty
    const newProd = [...CartProducts]      // create new array and copy CartProducts

    const newCart = newProd.find((product) => product.name == name); // create newCart and use find to se if the product is already there
   
    if(newCart) {     // if the product already exists, do this
      newCart.qty++;   // update quantity
      
    } else { ;        // if the product dont exist, do this
     newProd.push({image, name, qty, price})   // push the product in newProd array
    } 
    setCartProducts(newProd);  // set the setCartProducts to newProd
  }


  const onRemove = (name) => {    // remove function taking in product name
    console.log(name);           // show name of the product
    const changeProd = CartProducts.filter((item) => item.name !== name); // create changeProd and filter thru CartProducts delete the product with that name
    setCartProducts(changeProd);  // set setCartProducts to changeProd
  }

 


    return (
        <div className="ProductResult">

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
        < Shoppingcart   products={CartProducts}   onRemove={onRemove}/>


     </div>
        
         </div>
    )
}

export default ProductResult;