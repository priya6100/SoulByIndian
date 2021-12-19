/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import Layout from "../../../components/Layout";
import { generatePublicUrl } from "../../../urlConfig";
import "./style.css";
import { Link } from "react-router-dom";
import Card from "../../../components/UI/Card";
/**
 * @author
 * @function ProductStore
 **/

const ProductStore = (props) => {
  var limitTo = 5;

  function onLoadMore() {
    this.setState({
      limitTo: this.state.limitTo + 10,
    });
  }

  const product = useSelector((state) => state.product);
  const priceRange = product.priceRange;
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;

    dispatch(getProductsBySlug(match.params.slug));
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        {Object.keys(product.productsByPrice).map((key, index) => (
          <Card
            headerleft={`${props.match.params.slug} under ${priceRange[key]}`}
            headerRight={<button onClick={() => onLoadMore}>View All</button>}
            style={{
              width: "calc(100%-40px)",
              margin: "20px",
            }}></Card>
        ))}
      </div>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <div style={{ display: "flex" }}>
            {product.productsByPrice[key].product
              .slice(0, this.state.limitTo)
              .map((product) => (
                <Link
                  to={`/${product.slug}/${product._id}/p`}
                  style={{ display: "block" }}
                  className="productContainer">
                  <div className="productImgContainer">
                    <img
                      src={generatePublicUrl(product.productPictures[0])}
                      alt=""
                    />
                  </div>

                  <div className="productInfo">
                    <div style={{ margin: "5px 0" }}> {product.name} </div>
                    <span>4.3</span> &nbsp;
                    <span>1211</span>
                    <div className="productPrice">{product.price}</div>
                  </div>
                </Link>
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default ProductStore;
