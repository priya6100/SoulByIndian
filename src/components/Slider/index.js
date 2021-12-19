/** @format */

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Slider/style.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../actions";
import { generatePublicUrl } from "../../urlConfig";

const Slider = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const randNumber = [];

  if (product.products.length) {
    while (randNumber.length != 10) {
      const number = Math.floor(Math.random() * product.products.length);

      if (randNumber.indexOf(number) === -1) {
        randNumber.push(number);
      }
    }
  }

  console.log("number length");
  console.log(randNumber);

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [img6, setImg6] = useState("");
  const [img7, setImg7] = useState("");
  const [img8, setImg8] = useState("");
  const [img9, setImg9] = useState("");
  const [img10, setImg10] = useState("");

  useEffect(() => {
    setImg1(product.products[randNumber[0]]);
    setImg2(product.products[randNumber[1]]);
    setImg3(product.products[randNumber[2]]);
    setImg4(product.products[randNumber[3]]);
    setImg5(product.products[randNumber[4]]);
    setImg6(product.products[randNumber[5]]);
    setImg7(product.products[randNumber[6]]);
    setImg8(product.products[randNumber[7]]);
    setImg9(product.products[randNumber[8]]);
    setImg10(product.products[randNumber[9]]);
  }, [product.products[0]]);

  console.log("product slider");
  console.log(product);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 320 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 2,
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        centerMode={false}
        swipeable={true}
        arrows={false}
        draggable={false}
        sliderClass="slide-smooth"
        // className="slide-smooth"
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={false}
        // customTransition="all 3"
        // transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px slide-smooth">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
          <img
            style={{ height: "200px", width: "200px", borderRadius: "50%" }}
            src={img1 ? generatePublicUrl(img1.productPictures[0]) : ""}
            alt="First slide"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
          <img
            style={{ height: "200px", width: "200px", borderRadius: "50%" }}
            src={img2 ? generatePublicUrl(img2.productPictures[0]) : ""}
            alt="Second slide"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
          <img
            style={{ height: "200px", width: "200px", borderRadius: "50%" }}
            src={img3 ? generatePublicUrl(img3.productPictures[0]) : ""}
            alt="Thrid slide"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
          <img
            style={{ height: "200px", width: "200px", borderRadius: "50%" }}
            src={img4 ? generatePublicUrl(img4.productPictures[0]) : ""}
            alt="fourth slide"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
          <img
            style={{ height: "200px", width: "200px", borderRadius: "50%" }}
            src={img5 ? generatePublicUrl(img5.productPictures[0]) : ""}
            alt="Fifth slide"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
