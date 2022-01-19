/** @format */

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Slider/style.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from '../../actions';
import { generatePublicUrl } from "../../urlConfig";
import { Link } from "react-router-dom";

const Category = (props) => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getAllCategory())
    }, []);  


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 335 },
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
        arrows={true}
        draggable={true}
        sliderClass="slide-smooth"
        // className="slide-smooth"
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        itemClass="carousel-item-padding-40-px slide-smooth">
        {
            category.categories.map((cat, index) =>            
        
                <div className="homeCategory" key={index}>
                    <div>
                        <Link to={`/${cat.name}`}>
                        <img src={cat.categoryImage} alt={cat.categoryImage} />
                        </Link>
                        <h5>{cat.name}</h5>
                        
                    </div>
                </div>

            
            )
        }
      </Carousel>
    </div>
  );
};

export default Category;
