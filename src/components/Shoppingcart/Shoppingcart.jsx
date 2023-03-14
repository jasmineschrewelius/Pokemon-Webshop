import './Shoppingcart.css';
import { BsFillBasket3Fill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";


function Shoppingcart({
  products,
  onRemove,
}) {




    return (
      <div className="Shoppingcart">

        <div className="ShoppingHead">
        <h5>Shoppingcart </h5> <BsFillBasket3Fill/>
        

        </div>

        <div className="Cart">

        {products.length === 0 && (<span className="empty">Your cart is empty</span>)}

        {products.map((product, index) => (
          <div className="Cart-product" key={index}> 

          <img src={product.image} width={50} alt="" />

          <div className="Product-name"> 

           <h3>{product.name}</h3>

           <p>{product.qty }</p>

           <span className="Product-price">
            {product.price } :-
           </span>
          </div>


         <button className="Remove-button" onClick={() => onRemove(product)}>
          <BsFillTrash3Fill/>
          </button>

          </div>
        ))}

        Total amount: 

        </div>


      </div>
        
      );
}

export default Shoppingcart;