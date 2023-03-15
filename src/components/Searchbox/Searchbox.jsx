import './Searchbox.css';
import { useState } from "react";
import { ProductList } from "../ProductList";
import Product from "../Product/Product";
import React from "react";


function Searchbox ()  {

 
    const [value, setValue] = useState('');  // set initial state using useState

    const [result , setResult] = useState([]); // set initial state using useState


    const onChange = (event) => {   // take the event(changes) and setValue to that value
       setValue(event.target.value);
   
    }


   
    const searchProd = (searchInput) => {  // takes users input

     let result = [];                     // create empty array

     result = ProductList.filter(product=> {                           // take the ProductList and filter only take what we want
      return product.name.toLocaleLowerCase().includes(searchInput) || // return what product name includes the users input
      product.info.toLocaleLowerCase().includes(searchInput);       // return what product info includes the users input
      
     })
     setResult(result);  // set state to result

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

    
            
         < Product product={result}  onClick={(index) => {searchProd(index)}} /> {/*send important data to ProductResult */}
          
                  
           </div>
   
           </div>
     );
}



export default Searchbox;