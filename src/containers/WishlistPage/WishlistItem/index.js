/** @format */

import React, { useState } from "react";
import { generatePublicUrl } from "../../../urlConfig";
import "./style.css";
import { FaRupeeSign, FaTrashAlt } from "react-icons/fa";

/**
 * @author
 * @function WishlistItem
 **/

const WishlistItem = (props) => {
  const [qty, setQty] = useState(props.wishlistItem.qty);

  const { _id, name, price, img, size, color, slugName } = props.wishlistItem;

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
    <div className="wishlistItemContainer">
      <div className="flexRow-WishlistItem">
        <div className="wishlistImgContainer">
          <img src={generatePublicUrl(img)} alt={""} />
        </div>
        <div className="wishlistItemDetails">
          <div>
            <h4>{name}</h4>
            <p>size: {size}</p>
            <p>color: {color}</p>
            <button
              className="cartActionBtn"
              onClick={() => props.onRemovewishlistItem(_id)}>
              <FaTrashAlt /> Remove
            </button>
            <span className="wishlistPrice">
              <FaRupeeSign /> {price}
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "5px 0",
        }}>
        {/* quantity control */}
        {/* <div className="quantityControl">
          <button onClick={onQuantityDecrement}>-</button>
          <input value={qty} readOnly />
          <button onClick={onQuantityIncrement}>+</button>
        </div> */}
      </div>
    </div>
  );
};

export default WishlistItem;
