/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import WishlistItem from "./WishlistItem";
import {
  addToWishlist,
  getWishlistItems,
  removeWishlistItem,
} from "../../actions";

import PriceDetails from "../../components/PriceDetails";
import { MaterialButton } from "../../components/MaterialUi";
import "./style.css";
import { FaRupeeSign } from "react-icons/fa";

/**
 * @author
 * @function WishlistPage
 **/

/*
Before Login
Add product to wishlist
save in localStorage
when try to checkout ask for credentials and 
if logged in then add products to users wishlist database from localStorage
*/

const WishlistPage = (props) => {
  const wishlist = useSelector((state) => state.wishlist);
  const auth = useSelector((state) => state.auth);

  // const wishlistItems = wishlist.wishlistItems;
  const [wishlistItems, setWishlistItems] = useState(wishlist.wishlistItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setWishlistItems(wishlist.wishlistItems);
  }, [wishlist.wishlistItems]);

  useEffect(() => {
    console.log("this wishlist");
    console.log(wishlistItems);
  }, [wishlistItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getWishlistItems());
    }
  }, [auth.authenticate]);

  const onQuantityIncrement = (_id) => {
    //console.log({_id, qty});
    const { name, price, img, size, color } = wishlistItems[_id];
    dispatch(addToWishlist({ _id, name, price, img, size, color }, 1));
  };

  const onQuantityDecrement = (_id) => {
    const { name, price, img, size, color } = wishlistItems[_id];
    dispatch(addToWishlist({ _id, name, price, img, size, color }, -1));
  };

  const onRemovewishlistItem = (_id) => {
    dispatch(removeWishlistItem({ productId: _id }));
  };

  if (props.onlywishlistItems) {
    return (
      <>
        {Object.keys(wishlistItems).map((key, index) => (
          <wishlistItem
            key={index}
            wishlistItem={wishlistItems[key]}
            onQuantityInc={onQuantityIncrement}
            onQuantityDec={onQuantityDecrement}
          />
        ))}
      </>
    );
  }

  return (
    <Layout>
      <div className="wishlistContainer">
        <Card
          headerleft={`My wishlist`}
          style={{ width: "100%" }}
          // headerRight={<div>Deliver to</div>}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}>
            {Object.keys(wishlistItems).map((key, index) => (
              <WishlistItem
                key={index}
                wishlistItem={wishlistItems[key]}
                onQuantityInc={onQuantityIncrement}
                onQuantityDec={onQuantityDecrement}
                onRemovewishlistItem={onRemovewishlistItem}
              />
            ))}
          </div>

          <div className="wishlistPriceMobile">
            <div className="wishlistPriceMobileInner">
              {/* <h4>
                {" "}
                <FaRupeeSign />
                {Object.keys(wishlist.wishlistItems).reduce(
                  (totalPrice, key) => {
                    const { price, qty } = wishlist.wishlistItems[key];
                    return totalPrice + price * qty;
                  },
                  0
                )}
              </h4> */}

              {/* <a href="#pricemobiledetails">View Details</a> */}
            </div>
            <div style={{ width: "150px" }}>
              {/* <MaterialButton
                title="PLACE ORDER"
                onClick={() => props.history.push(`/checkout`)}
              /> */}
            </div>
          </div>
          <div id="pricemobiledetails"></div>
        </Card>

        {/* <PriceDetails
          totalItem={Object.keys(wishlist.wishlistItems).reduce(function (
            qty,
            key
          ) {
            return qty + wishlist.wishlistItems[key].qty;
          },
          0)}
          totalPrice={Object.keys(wishlist.wishlistItems).reduce(
            (totalPrice, key) => {
              const { price, qty } = wishlist.wishlistItems[key];
              return totalPrice + price * qty;
            },
            0
          )}
          onClick={() => props.history.push(`/checkout`)}
          reveal={wishlist.wishlistItems.length}
          title={`Place Order`}
        /> */}
      </div>
    </Layout>
  );
};

export default WishlistPage;
