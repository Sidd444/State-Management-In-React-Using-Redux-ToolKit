import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoeInCart from "./ShoeInCart";
import {useSelector} from 'react-redux'

export default function Cart(props) {

  const arr = useSelector(state => state.arr); 
  const total = useSelector(state=>state.total);
  
  return (
    <div id="cart">
      <h1>Cart</h1>
      <div>
        {arr!==undefined && arr.map((shoe) => (
          <ShoeInCart          
            shoe={shoe}
            remove={props.remove}
          />
        ))}
      </div>
      <h2>Total:{total}</h2>
      <Link to='/payment'><button id="proceed-to-payment-button">Proceed To Payment</button></Link>
    </div>
  );
}
