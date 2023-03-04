import './App.css';
import React from 'react';
import Searchbox from './components/Searchbox';
import Shoppingcart from './components/Shoppingcart';
import { ProductList } from './components/ProductList';
import { Product } from './components/Product';


function App() {





  return (
    <div className="App">

   <div className='Shoppingcart'>
     < Shoppingcart />

     <div className='Title'>
      <h1>My Webshop</h1>

      <div className='Searchbox'>
      < Searchbox />

     <div className='ProductList'>

     {ProductList.map((product,key) => 
     <Product data={product} key={key}/>
     )}
     

     


     </div>
     </div>
      </div>
      </div> 
    </div>
  );
}

export default App;
