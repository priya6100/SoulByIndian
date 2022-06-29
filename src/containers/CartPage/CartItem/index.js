/** @format */

import React, { useState } from "react";
import { generatePublicUrl } from "../../../urlConfig";
import "./style.css";
import { FaRegSave, FaRupeeSign, FaTrashAlt } from "react-icons/fa";

/**
 * @author
 * @function CartItem
 **/

const CartItem = (props) => {
  const [qty, setQty] = useState(props.cartItem.qty);

  const { _id, name, price, img, size, color } = props.cartItem;

  const onQuantityIncrement = () => {
    setQty(qty + 1);
    props.onQuantityInc(_id, qty + 1);
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
    props.onQuantityDec(_id, qty - 1);
  };

  return (
    
      <div className="flexRow-CartItem">
        <div className="card">
        
        <div className="cartItemDetails">
        <div className="cartProImgContainer">
          <img src={generatePublicUrl(img)} alt={""} />
        </div>
          <div>
            <h4>{name}</h4>
            <p>size: {size}</p>
            <p>color: {color}</p>
            <button className="cartActionBtn">
              {" "}
              
            </button>
            <button
              className="cartActionBtn" style={{"color" : "red"}}
              onClick={() => props.onRemoveCartItem(_id)}>
              <FaTrashAlt /> Remove
            </button>
            <span className="CartItPrice">
              <FaRupeeSign /> {price}
            </span>
          </div>
          <div className="rgtContainer">
            <div className="quantityControl">
              <button onClick={onQuantityDecrement}>-</button>
              <input value={qty} readOnly />
              <button onClick={onQuantityIncrement}>+</button>
            </div>
          </div>
        </div>
        </div>
      </div>

  );
};

export default CartItem;
