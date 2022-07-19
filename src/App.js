import React, { useState } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

import Main from './components/Main';
import Header from './components/Header';
import Basket from './components/Basket';
import Data from './Data';

function App() {
  const {products} = Data;
  const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x))
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  };
  return (
    <div className="App">
      <Header/>
      <div className='row'>
        <Main onAdd={onAdd} products={products}/>
        <Basket onAdd={onAdd} cartItems={cartItems}/>
      </div>
      
      {/* <HashRouter>
        <Navigation />
        <Route path='/' component={Home}/>
        <Route path='/about' component={About}/>
      </HashRouter> */}

    </div>
  );
}

export default App;
