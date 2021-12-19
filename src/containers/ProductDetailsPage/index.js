/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist, getProductDetailsById } from "../../actions";
import Layout from "../../components/Layout";
import { NormalButton } from "../../components/MaterialUi";
import { generatePublicUrl } from "../../urlConfig";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  IoIosArrowForward,
  IoIosStar,
  // IoMdCart
} from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { AiFillShopping, AiFillThunderbolt } from "react-icons/ai";
import "./style.css";
// import {addToCart} from '../../actions';
/**
 * @author
 * @function ProductDetailsPage
 **/

const ProductDetailsPage = (props) => {
  const dispatch = useDispatch();
  const [selectSize, setSelectSize] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [revealButton, setRevealButton] = useState(false);
  const product = useSelector((state) => state.product);
  const auth = useSelector((state) => state.auth);
  const { productId, productSlug } = props.match.params;

  useEffect(() => {
    setRevealButton(selectSize.length && selectColor.length);
  }, [selectSize, selectColor]);

  useEffect(() => {
    const payload = {
      params: {
        productId,
      },
    };

    dispatch(getProductDetailsById(payload));
  }, []);

  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }

  const size = product.productDetails.size;

  return (
    <Layout>
      <div className="productDescriptionContainer">
        {/* home > category > subCategory > productName */}
        <div className="breed">
          <ul>
            <li>
              <a href="/">Home</a>
              <IoIosArrowForward />
            </li>
            <li>
              <a href="/men">Men</a>
              <IoIosArrowForward />
            </li>
            <li>
              <a href="/">{product.productDetails.name}</a>
            </li>
          </ul>
        </div>
        <br />

        <div className="productContainer">
          <div className="flexRowPr">
            <Carousel
              className="prnewCar"
              showArrows={true}
              showThumbs={true}
              autoPlay={true}
              infiniteLoop={true}
              interval={5000}
              showStatus={false}
              transitionTime={1000}
              swipeable={true}
              thumbWidth={50}
              showIndicators={false}
              dynamicHeight={500}>
              {product.productDetails.productPictures.map((pod, index) => (
                <img
                  src={generatePublicUrl(
                    product.productDetails.productPictures[0]
                  )}
                  alt={`${pod.img}`}
                />
              ))}

              {/* <p className="legend">Legend 1</p> */}
            </Carousel>
          </div>
          <div className="productDetAdj">
            {/* product description */}
            <div className="productDetails">
              <p className="productTitle">{product.productDetails.name}</p>
              <div>
                <span className="ratingCount">
                  4.3 <IoIosStar />
                </span>
                <span className="ratingNumbersReviews">
                  72,234 Ratings & 8,140 Reviews
                </span>
              </div>
              <div className="extraOffer">
                Extra <BiRupee />
                4500 off{" "}
              </div>
              <div className="flexRow priceContainer">
                <span className="price">
                  <BiRupee />
                  {product.productDetails.price}
                </span>
                <span className="discount" style={{ margin: "0 10px" }}>
                  22% off
                </span>
                {/* <span>i</span> */}
              </div>
              <div>
                <p>{product.productDetails.description}</p>
                <div className="pSize flex-center">
                  <p>Color{" : "}</p>
                  <div className="btnGroup">
                    {/* <button className="sizeBtn" id="s">S</button>
                  <button className="sizeBtn" id="m">M</button>
                  <button className="sizeBtn" id="l">L</button>
                  <button className="sizeBtn" id="xl">XL</button>
                   <button className="sizeBtn" id="xxl">XXL</button> */}
                    {product.productDetails.color.map((color) => (
                      <div>
                        <input
                          style={{ display: "none" }}
                          type="radio"
                          name="color-radio"
                          className="radio-input"
                          value={color}
                          id={`radio-${color}`}
                        />
                        <label
                          className="color-radio"
                          for={`radio-${color}`}
                          onClick={() => {
                            setSelectColor(color);
                          }}>{`${color} `}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pSize flex-center">
                  <p>Size{" : "}</p>
                  <div className="btnGroup">
                    {/* <button className="sizeBtn" id="s">S</button>
                  <button className="sizeBtn" id="m">M</button>
                  <button className="sizeBtn" id="l">L</button>
                  <button className="sizeBtn" id="xl">XL</button>
                   <button className="sizeBtn" id="xxl">XXL</button> */}
                    {Object.keys(size).map((name) => {
                      return size[name] ? (
                        <div>
                          <input
                            style={{ display: "none" }}
                            type="radio"
                            name="size-radio"
                            className="radio-input"
                            value={name}
                            id={`radio-${name}`}
                          />
                          <label
                            className="size-radio"
                            for={`radio-${name}`}
                            onClick={() => {
                              setSelectSize(name.split("_")[0]);
                            }}>{`${name.split("_")[0]} `}</label>
                        </div>
                      ) : (
                        ""
                      );
                    })}
                  </div>
                </div>
                <br />
                <br />
                <div className="prButtonContainer">
                  <NormalButton
                    title="ADD TO CART"
                    bgColor="#cb8364"
                    textColor="#ffffff"
                    icon={<AiFillShopping />}
                    style={
                      revealButton
                        ? {}
                        : { pointerEvents: "none", opacity: "0.6" }
                    }
                    onClick={() => {
                      const { _id, name, price } = product.productDetails;
                      const img = product.productDetails.productPictures[0];
                      const size = selectSize;
                      const color = selectColor;

                      dispatch(
                        addToCart({
                          _id,
                          name,
                          price,
                          img,
                          size,
                          color,
                        })
                      );
                      props.history.push(`/cart`);
                    }}
                  />

                  <NormalButton
                    title="Wishlist"
                    bgColor="transparent"
                    textColor="#cb8364"
                    border="1px solid #cb8364"
                    icon={<AiFillThunderbolt />}
                    style={
                      revealButton
                        ? auth.authenticate
                          ? {}
                          : { pointerEvents: "none", opacity: "0.6" }
                        : { pointerEvents: "none", opacity: "0.6" }
                    }
                    onClick={() => {
                      const { _id, name, price } = product.productDetails;
                      const img = product.productDetails.productPictures[0];
                      const size = selectSize;
                      const color = selectColor;
                      dispatch(
                        addToWishlist({
                          _id,
                          name,
                          price,
                          img,
                          size,
                          color,
                        })
                      );
                      props.history.push(`/wishlist`);
                    }}
                  />
                </div>
                <h4>Delivery Option</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </Layout>
  );
};

export default ProductDetailsPage;
