import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { increaseShoeQuantity, decreaseShoeQuantity} from "../Features/Shoes/global";

export default function ShoeInCart(props) {

  const dispatch=useDispatch(); 
  const total = useSelector(state=>state.total);

  useEffect(()=>{
    if(props.shoe.q<=0) props.remove(props.shoe);
  },[props.shoe.q]);

  function increaseQuantity(){
    dispatch(increaseShoeQuantity(props.shoe));
  }
  function decreaseQuantity(){
    dispatch(decreaseShoeQuantity(props.shoe));
  }
  return (
    <div
      id="cartShoe"
      style={{ display: "flex", justifyContent: "space-evenly", marginLeft:"50px" }}
    >
      <img src={props.shoe.imgSrc} />
      <div
       style={{marginLeft:"20px",width:"200px"}}
      >
        <h4 style={{ marginTop: "-8px" }}>{props.shoe.name}</h4>
        <h4 style={{ marginTop: "-20px" }}>${props.shoe.price}</h4>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button 
           className="quantity-changer-button"
           onClick={()=>{
            decreaseQuantity();
           }}
          style={{backgroundColor:"red"}}>-</button>
        </div>
        <div style={{ marginTop: "-12px", marginLeft:"22px" }}>
          <h4> {props.shoe.q} </h4>
        </div>
        <div>
          <button 
          className="quantity-changer-button"
          onClick={()=>{
            increaseQuantity();
          }}
          style={{backgroundColor:"green"}}>+</button>
        </div>
      </div>
    </div>
  );
}
