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

const Kids = (props) => {
  const product = useSelector((state) => state.product);
  const priceRange = product.priceRange;
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;

    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  var limitTo = 5;

  function onLoadMore() {
    this.setState({
      limitTo: this.state.limitTo + 10,
    });
  }
  return (
    <div style={{ display: "flex" }}>
      <div className="kidSec">
        {Object.keys(product.productsByPrice).map((key, index) => {
          return (
            // <Card
            //   headerleft ={`${props.match.params.slug} under ${priceRange[key]}`}
            //   headerRight = {  <button onClick={()=> onLoadMore}>View All</button> }
            //   style={{
            //     width: 'calc(100%-40px)',
            //     margin: '20px'
            //   }}
            // >
            // </Card>

            <div style={{ padding: "10px" }}>
              <h3
                style={{
                  color: "black",
                }}>{`${props.match.params.slug} under ${priceRange[key]}`}</h3>
              <div style={{ textAlign: "end" }}>
                {/* {  <button onClick={()=> onLoadMore}>View All</button> } */}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex" }}>
        {Object.keys(product.productsByPrice).map((key, index) => {
          return (
            <>
              {product.productsByPrice[key].map((product) => (
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
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Kids;
