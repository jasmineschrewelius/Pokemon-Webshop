import './App.css';
import React from 'react';
import Searchbox from './components/Searchbox/Searchbox';
import Shoppingcart from './components/Shoppingcart';




function App() {





  return (
    <div className="App">

   <div className='Shoppingcart'>
     < Shoppingcart />



     <div className='Title'>
      <h1>Pokemon Webshop</h1>



      <div className='Searchbox'>
      < Searchbox />


     
     </div>
      </div>
      </div> 
    </div>
  );
}

export default App;
