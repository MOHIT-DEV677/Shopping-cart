import React, { useState, useEffect } from 'react';
import './Cart.css';
import {useContext} from 'react';
import { cartcontext } from '../App';
const Cart = () => {
  const {cart , setcart}=useContext(cartcontext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>

      <div className="cart-products">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="cart-img">
              <img src={product.pic} alt={product.name} />
            </div>
            <div className="cart-pro-detail">
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        Total Amount: ₹{total}
      </div>
    </div>
  );
};

export default Cart;
