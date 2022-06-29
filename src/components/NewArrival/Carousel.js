import React from 'react';
import item1 from '../../images/3.png';
import item2 from '../../images/2.png';
import item3 from '../../images/3.png';
import item4 from '../../images/logo/bag2.jpg';
import item5 from '../../images/2.png';
import item6 from '../../images/3.png';
import item7 from '../../images/logo/bag2.jpg';
import item8 from '../../images/2.png';
import item9 from '../../images/3.png';
import item10 from '../../images/logo/bag2.jpg';
import Carousel  from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Link } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../actions";
import { generatePublicUrl } from "../../urlConfig";






// const NewArrival = () => {

  const NewArrival = (props) => {
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllProduct());
    }, []);
  
    const randNumber = [];
  
    if (product.products.length) {
      while (randNumber.length != 10) {
        const number = Math.floor(Math.random() * 10);
  
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
    }, [product.products[0]]);
  
    console.log("product slider");
    console.log(product);
  











    return(
        <>
           <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={false}
          containerClass="carousel-container2"
          itemClass="carousel2-item"
        >
         <div><Link className="caImgContainer" to={`/${img1 ? img1.slug:""}/${img1 ? img1._id:""}/p`}> <img
            
            src={img1 ? generatePublicUrl(img1.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
         <div className="carousel-img-content">
                <h3>{img1 ? img1.name:""}</h3>
                {/* <p className="price">under &#8377;399</p> */}
                <p>Price: ₹{img1 ? img1.price:""}</p>
              </div>
          </div>
         <div>
         <Link className="caImgContainer" to={`/${img2 ? img2.slug:""}/${img2 ? img2._id:""}/p`}>
         <img
            
            src={img2 ? generatePublicUrl(img2.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
         <div className="carousel-img-content">
         <h3>{img2 ? img2.name:""}</h3>
         <p>Price: ₹{img2 ? img2.price:""}</p>
              </div>
          </div>
         <div> <Link className="caImgContainer" to={`/${img2 ? img2.slug:""}/${img2 ? img2._id:""}/p`}>
         <img
            
            src={img3 ? generatePublicUrl(img3.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
         <div className="carousel-img-content">
         <h3>{img3 ? img3.name:""}</h3>
         <p>Price: ₹{img3 ? img3.price:""}</p>
              </div>
          </div>
         <div> <Link className="caImgContainer" to={`/${img2 ? img2.slug:""}/${img2 ? img2._id:""}/p`}><img
            
            src={img4 ? generatePublicUrl(img4.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
         
         <div className="carousel-img-content">
                <h3>{img4 ? img4.name:""}</h3>
                <p>Price: ₹{img4 ? img4.price:""}</p>
              </div>
               </div>
         <div> <Link className="caImgContainer" to={`/${img2 ? img2.slug:""}/${img2 ? img2._id:""}/p`}><img
            
            src={img5 ? generatePublicUrl(img5.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
         <div className="carousel-img-content">
                <h3>{img5 ? img5.name:""}</h3>
                <p>Price: ₹{img5 ? img5.price:""}</p>
              </div>
               </div>
         <div> <Link className="caImgContainer" to={`/${img2 ? img2.slug:""}/${img2 ? img2._id:""}/p`}><img
            
            src={img6 ? generatePublicUrl(img6.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
         <div className="carousel-img-content">
                <h3>{img6 ? img6.name:""}</h3>
                <p>Price: ₹{img6 ? img6.price:""}</p>
              </div>
               </div>
         <div> <Link className="caImgContainer" to={`/${img2 ? img2.slug:""}/${img2 ? img2._id:""}/p`}><img
            
            src={img7 ? generatePublicUrl(img7.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
         <div className="carousel-img-content">
                <h3>{img7 ? img7.name:""}</h3>
                <p>Price: ₹{img7 ? img7.price:""}</p>
              </div>
               </div>
         <div> <Link className="caImgContainer" to={`/${img2 ? img2.slug:""}/${img2 ? img2._id:""}/p`}><img
            
            src={img8 ? generatePublicUrl(img8.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
         <div className="carousel-img-content">
                <h3>{img8 ? img8.name:""}</h3>
                <p>Price: ₹{img8 ? img8.price:""}</p>
              </div>
               </div>
         <div> <Link className="caImgContainer" to={`/${img2 ? img2.slug:""}/${img2 ? img2._id:""}/p`}><img
            
            src={img9 ? generatePublicUrl(img9.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
         <div className="carousel-img-content">
                <h3>{img9 ? img9.name:""}</h3>
                <p>Price: ₹{img9 ? img9.price:""}</p>
              </div>
               </div>
         <div> <Link className="caImgContainer" to={`/${img2 ? img2.slug:""}/${img2 ? img2._id:""}/p`}><img
            
            src={img10 ? generatePublicUrl(img10.productPictures[0]) : ""}
            alt="First slide"
          /></Link>
         <div className="carousel-img-content">
                <h3>{img10 ? img10.name:""}</h3>
                <p>Price: ₹{img10 ? img10.price:""}</p>
              </div>
               </div>
         
        </Carousel>


        </>
    )
}
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024},
      items: 5, 
      slidesToSlide: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464},
      items: 3,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0},
      items: 2,
      slideToSlide: 2
    },
  };

export default NewArrival 
