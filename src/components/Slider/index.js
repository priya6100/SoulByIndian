/** @format */

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../actions";
import { generatePublicUrl } from "../../urlConfig";
import { Link } from "react-router-dom";
const Slider = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const randNumber = [];

  if (product.products.length) {
    while (randNumber.length != 12) {
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
  const [img11, setImg11] = useState("");
  const [img12, setImg12] = useState("");

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
    setImg11(product.products[randNumber[10]]);
    setImg12(product.products[randNumber[11]]);
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
    <div className="container-fluid-flex justify-content-center">
     <div className="row">
     <div className="col-md-3">
      {/* <Carousel
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
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={false}
        // customTransition="all 3"
        // transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px slide-smooth"> */}
        <div className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
            <div className="card"> <Link to={`/${img1 ? img1.slug:""}/${img1 ? img1._id:""}/p`}>
          <img
            
            src={img1 ? generatePublicUrl(img1.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
          <div className="row">
         <div className="col-md-6">
         <p className="slideritemname">{img1 ? img1.name:""}</p>
         </div>
         <div className="col-md-6">
         <h3><span style={{"color" : "black"}}>Price:</span>${img1 ? img1.price:""}</h3>
         </div>
          </div>
         
         
        </div>
    </div>
        </div>
        <div className="col-md-3">
    <div className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
            <div className="card">
            <Link to={`/${img2 ? img2.slug:""}/${img2 ? img2._id:""}/p`}><img
            
            src={img2 ? generatePublicUrl(img2.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
            <div className="row">
         <div className="col-md-6">
         <p className="slideritemname">{img2 ? img2.name:""}</p>
         </div>
         <div className="col-md-6">
         <h3><span style={{"color" : "black"}}>Price:</span>${img2 ? img2.price:""}</h3>
         </div>
          </div>
        </div>
    </div>
</div>
<div className="col-md-3">
    <div className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
            <div className="card">
            <Link to={`/${img3 ? img2.slug:""}/${img3 ? img3._id:""}/p`}><img
            
            src={img3 ? generatePublicUrl(img3.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
           <div className="row">
         <div className="col-md-6">
         <p className="slideritemname">{img3 ? img3.name:""}</p>
         </div>
         <div className="col-md-6">
         <h3><span style={{"color" : "black"}}>Price:</span>${img3 ? img3.price:""}</h3>
         </div>
          </div>
        </div>
    </div>
</div>
<div className="col-md-3">
    <div className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
            <div className="card">
            <Link to={`/${img4 ? img4.slug:""}/${img4 ? img4._id:""}/p`}><img
            
            src={img4 ? generatePublicUrl(img4.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
            <div className="row">
         <div className="col-md-6">
         <p className="slideritemname">{img4 ? img4.name:""}</p>
         </div>
         <div className="col-md-6">
         <h3><span style={{"color" : "black"}}>Price:</span>${img4 ? img4.price:""}</h3>
         </div>
          </div>
        </div>
    </div>
     </div>  
     <div className="col-md-3">
    <div className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
            <div className="card">
            <Link to={`/${img5 ? img5.slug:""}/${img5 ? img5._id:""}/p`}><img
            src={img5 ? generatePublicUrl(img5.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
           <div className="row">
         <div className="col-md-6">
         <p className="slideritemname">{img5 ? img5.name:""}</p>
         </div>
         <div className="col-md-6">
         <h3><span style={{"color" : "black"}}>Price:</span>${img5 ? img5.price:""}</h3>
         </div>
          </div>
        </div>
    </div>
    </div> 
    <div className="col-md-3">
    <div className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
            <div className="card">
            <Link to={`/${img6 ? img6.slug:""}/${img6 ? img6._id:""}/p`}><img
            
            src={img6 ? generatePublicUrl(img6.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
            <div className="row">
         <div className="col-md-6">
         <p className="slideritemname">{img6 ? img6.name:""}</p>
         </div>
         <div className="col-md-6">
         <h3><span style={{"color" : "black"}}>Price:</span>${img6 ? img6.price:""}</h3>
         </div>
          </div>
        </div>
    </div>
    </div>
    <div className="col-md-3">
    <div className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
            <div className="card">
            <Link to={`/${img7 ? img7.slug:""}/${img7 ? img7._id:""}/p`}><img
            
            src={img7 ? generatePublicUrl(img7.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
            <div className="row">
         <div className="col-md-6">
         <p className="slideritemname">{img7 ? img7.name:""}</p>
         </div>
         <div className="col-md-6">
         <h3><span style={{"color" : "black"}}>Price:</span>${img7 ? img7.price:""}</h3>
         </div>
          </div>
        </div>
    </div>
    </div>
    <div className="col-md-3">
    <div className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
            <div className="card">
            <Link to={`/${img8 ? img8.slug:""}/${img8 ? img8._id:""}/p`}><img
            
            src={img8 ? generatePublicUrl(img8.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
           <div className="row">
         <div className="col-md-6">
         <p className="slideritemname">{img8 ? img8.name:""}</p>
         </div>
         <div className="col-md-6">
         <h3><span style={{"color" : "black"}}>Price:</span>${img8 ? img8.price:""}</h3>
         </div>
          </div>
        </div>
    </div>
    </div>
    <div className="col-md-3">
    <div className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
            <div className="card">
            <Link to={`/${img9 ? img9.slug:""}/${img9 ? img9._id:""}/p`}><img
            
            src={img9 ? generatePublicUrl(img9.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
            <div className="row">
         <div className="col-md-6">
         <p className="slideritemname">{img9 ? img9.name:""}</p>
         </div>
         <div className="col-md-6">
         <h3><span style={{"color" : "black"}}>Price:</span>${img9 ? img9.price:""}</h3>
         </div>
          </div>
        </div>
    </div>
    </div>
    <div className="col-md-3">
    <div className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
            <div className="card">
            <Link to={`/${img10 ? img10.slug:""}/${img10 ? img10._id:""}/p`}><img
            
            src={img10 ? generatePublicUrl(img10.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
           <div className="row">
         <div className="col-md-6">
         <p className="slideritemname">{img10 ? img10.name:""}</p>
         </div>
         <div className="col-md-6">
         <h3><span style={{"color" : "black"}}>Price:</span>${img10 ? img10.price:""}</h3>
         </div>
          </div>
        </div>
    </div>
</div>
<div className="col-md-3">
    <div className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
            <div className="card">
            <Link to={`/${img11 ? img11.slug:""}/${img11 ? img11._id:""}/p`}><img
            
            src={img11 ? generatePublicUrl(img11.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
            <div className="row">
         <div className="col-md-6">
         <p className="slideritemname">{img11 ? img11.name:""}</p>
         </div>
         <div className="col-md-6">
         <h3><span style={{"color" : "black"}}>Price:</span>${img11 ? img11.price:""}</h3>
         </div>
          </div>
        </div>
    </div>
    </div>
    <div className="col-md-3">
    <div className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
            <div className="card">
            <Link to={`/${img12 ? img12.slug:""}/${img12 ? img12._id:""}/p`}><img
            
            src={img12 ? generatePublicUrl(img12.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
            <div className="row">
         <div className="col-md-6">
         <p className="slideritemname">{img12 ? img12.name:""}</p>
         </div>
         <div className="col-md-6">
         <h3><span style={{"color" : "black"}}>Price:</span>${img12 ? img12.price:""}</h3>
         </div>
          </div>
        </div>
    </div>
    </div>
</div>
      {/* </Carousel> */}
    </div>
  );
};

export default Slider;
