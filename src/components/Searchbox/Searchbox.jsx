import './Searchbox.css';
import { useState } from "react";
import { ProductList } from "../ProductList";
import ProductResult from "../Product/Product";
import React from "react";


function Searchbox ()  {

 
    const [value, setValue] = useState('');  // useState to set state

    const [result , setResult] = useState([]);


    const onChange = (event) => {   // take the event(changes) and setValue to that value
       setValue(event.target.value);
   
    }


   
    const searchProd = (searchInput) => {  // takes users input

     let result = [];                     // create empty array

     result = ProductList.filter(product=> {                           // take the ProductList and filter only take what we want
      return product.name.toLocaleLowerCase().includes(searchInput) || // return what product name includes the users input
      product.info.toLocaleLowerCase().includes(searchInput);       // return what product info includes the users input
      
     })
     setResult(result);

     console.log(result);
     console.log('search', searchInput);
    }
   


       return (
          <div className="SearchBox">
   
           <div className="SearchInput">
               <input type="text" value={value} onChange={onChange} />
               <button onClick={()=> searchProd(value)}>Search</button>
           </div>
   
           <div className="ProductList">

    
            
         < ProductResult product={result}  onClick={(index) => {searchProd(index)}} />
          
                  
           </div>
   
           </div>
     );
}



export default Searchbox;