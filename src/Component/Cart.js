import React, { useState } from 'react';
import product from './Product'; 

function Cart() {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product) => {
    console.log("hello");
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h2 style={{textAlign : "center"}}>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p style={{textAlign : "center"}}>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))} 
        </ul>
      )}
    </div>
  );
}

export default Cart;
