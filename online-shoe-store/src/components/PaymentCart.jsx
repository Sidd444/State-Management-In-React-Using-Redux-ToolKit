import React from "react";
import { Link } from "react-router-dom";
import ShoeInPaymentCart from "./ShoeInPaymentCart";
import {useSelector} from 'react-redux'

export default function PaymentCart(props) {
  const arr = useSelector(state => state.arr); 
  const total = useSelector(state=>state.total);

  return (
    <div id="cart">
      <h1>Cart</h1>
      <div>
        {arr!==undefined && arr.map((shoe) => (
          <ShoeInPaymentCart
            shoe={shoe}
          />
        ))}
      </div>
      <h2>Total:{total}</h2>
      <Link to='/' className="flex-center">
        <button id="back-to-shopping">
          Go Back To Shopping
        </button>
      </Link>
    </div>
  );
}
