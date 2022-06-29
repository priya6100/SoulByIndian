/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProductDetailsById } from "../../actions";
import Layout from "../../components/Layout";
import { MaterialButton } from "../../components/MaterialUi";
import { generatePublicUrl } from "../../urlConfig";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import "./style.css";
import NewArrival from '../../components/NewArrival/Carousel';
// import {addToCart} from '../../actions';
/**
 * @author
 * @function ProductDetailsPage
 **/
const ProductDetailsPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product, ">>product");
  const productNewDetails = product.productDetails;
  useEffect(() => {
    const { productId } = props.match.params;
    console.log(props);
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

  return (
    <Layout>
      <div className="productDescriptionContainer">
        <div className="flexRow">
          <div className="verticalImageStack">
            {product.productDetails.productPictures.map((thumb, index) => (
              <div className="thumbnail">
                <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />
              </div>
            ))}
            <div className="thumbnail active">
              {product.productDetails.productPictures.map((thumb, index) => (
                <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />
              ))}
            </div>
          </div>

          <div className="productDescContainer">
            <div className="productDescImgContainer">
              {/* <img src={generatePublicUrl(product.productDetails.productPictures[0])} alt={`${product.productDetails.productPictures[0]}`} /> */}
              <Carousel
                showArrows={true}
                showThumbs={true}
                autoPlay={true}
                infiniteLoop={true}
                interval={5000}
                showStatus={false}
                transitionTime={1000}
                swipeable={true}>
                {productNewDetails.productPictures.map((pod, index) => (
                  <img src={generatePublicUrl(pod.img)} alt={`${pod.img}`} />
                ))}

                {/* <p className="legend">Legend 1</p> */}
              </Carousel>
            </div>

            {/* action buttons */}
            <div className="flexRow">
              <MaterialButton
                title="ADD TO CART"
                bgColor="#ff9f00"
                textColor="#ffffff"
                style={{
                  marginRight: "5px",
                }}
                icon={<IoMdCart />}
                onClick={() => {
                  const { _id, name, price } = product.productDetails;
                  const img = product.productDetails.productPictures[0];
                  dispatch(addToCart({ _id, name, price, img }));
                  props.history.push(`/cart`);
                }}
              />
              <MaterialButton
                title="BUY NOW"
                bgColor="#fb641b"
                textColor="#ffffff"
                style={{
                  marginLeft: "5px",
                }}
                icon={<AiFillThunderbolt />}
                onClick={() => {
                  const { _id, name, price } = product.productDetails;
                  const img = product.productDetails.productPictures[0];
                  dispatch(addToCart({ _id, name, price, img }));
                  props.history.push(`/cart`);
                }}
              />
            </div>
          </div>
        </div>
        <div>
          {/* home > category > subCategory > productName */}
          <div className="breed">
            <ul>
              <li>
                <a href="/">Home</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="/">Men</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="/">Men-new-arrivals</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="/">WoMen-new-arrivals</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="/">{product.productDetails.name}</a>
              </li>
            </ul>
          </div>
          {/* product description */}
          <div className="productDetails">
            <p className="productTitle">{product.productDetails.name}</p>
            <div>
              <span className="ratingCount">
                4.9 <IoIosStar />
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
              <p
                style={{
                  color: "#212121",
                  fontSize: "14px",
                  fontWeight: "600",
                }}>
                Available Offers
              </p>
              <p style={{ display: "flex" }}>
                <span
                  style={{
                    width: "100px",
                    fontSize: "12px",
                    color: "#878787",
                    fontWeight: "600",
                    marginRight: "20px",
                  }}>
                  Description
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#212121",
                  }}>
                  {product.productDetails.description}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="productDetailsApp">
        {product.productDetails.productPictures.map((pod, index) => (
          <div className="productDetailsName">
            <div className="big-img">
              <img src={generatePublicUrl(pod[0].img)} alt={`${pod.img}`} />
            </div>
            <div className="productDetailsBox">
              <h2>{product.productDetails.name}</h2>
            </div>
            <p>{product.productDetails.description}</p>
            <div className="thumbPr">
              {/* <img src={generatePublicUrl(pod.img)} alt={`${pod.img}`} /> */}
            </div>
          </div>
        ))}
      </div>
      
    </Layout>
  );
};
<NewArrival/>
export default ProductDetailsPage;
