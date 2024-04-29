import React from "react";
import { setTotal } from "../Features/Shoes/global";
import {useDispatch,useSelector} from 'react-redux';

export default function ShoeInfo(props) {
  const dispatch=useDispatch();
  const total = useSelector(state=>state.total);
  function addToCart(shoeImgSrc, shoeName, shoePrice) {
    //const q=useRef(0);
    let shoeObj = {
      imgSrc: shoeImgSrc,
      name: shoeName,
      price: Number.parseInt(shoePrice.substring(1)),
      q: 1,
    };

    props.addNewShoe(shoeObj);
    dispatch(setTotal(shoeObj.price));
  }
  return (
    <div className="shoeInfo">
      <div className="flex justify-center">
      <img className="shoeOrigin" src={props.imgSrc} /></div>
      <div className="mt-5">
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
        <button
          className="add-shoe-to-cart"
          onClick={() => {
            addToCart(props.imgSrc, props.name, props.price);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
